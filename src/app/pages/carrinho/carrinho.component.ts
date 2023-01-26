import { AuthService } from './../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { Carrinho } from 'src/app/services/Carrinho';
import { IPedidoProduto } from 'src/app/shared/models/pedido-produto.interface';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { HttpClient } from '@angular/common/http';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { ICliente } from 'src/app/shared/models/cliente.interface';
import { IClientePost } from 'src/app/shared/models/clientePost.interface';
import { IEndereco } from 'src/app/shared/models/endereco.interface';
import { EnderecoRequestService } from 'src/app/shared/request/endereco.service';
import { Prateleira } from 'src/app/services/Prateleira';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private request: ProdutosRequestService,
    private endRequest: EnderecoRequestService,
    private requestc: ClientesRequestService,
    public auth: AuthService,
    private http:HttpClient
    ) { 
    }
  valor_total=0;
  produtos:IProduto[]=[];
  clientes: ICliente[] = [];
  selected:any;
  hashFindProduto:Map<number,number>=new Map<number,number>();

  getCarrinho(){
    return Carrinho.listar();
  }
  iniciar(){
    this.request.getProduto()
      .pipe(take(1))
      .subscribe(list => {
        this.produtos = <IProduto[]>list;
        for (let i = 0; i < this.produtos.length; i++) {
          const element = this.produtos[i].id;
          this.hashFindProduto.set(element,i);
        }
      })
      this.calcularValorTotal()
}
getProduto(index:number){
  
    let i = this.hashFindProduto.get(index)
    if(i||i==0){
        return this.produtos[i];
    }
    let val = {} as IProduto;
    return val;
}

getClientes(){
  this.requestc.getCliente().pipe(take(1)).subscribe(res=>{
    this.endRequest.getEndereco().pipe(take(1)).subscribe(response=>{
      let clientesPost = <IClientePost[]>res;
      let hashFindEnd = new Map<number,number>();
      let enderecos = <IEndereco[]>response;
      for (let i = 0; i < enderecos.length; i++) {
        const endereco = enderecos[i].id;
        hashFindEnd.set(endereco,i);
      }
      clientesPost.forEach(cliente=>{
        this.clientes.push({...enderecos[hashFindEnd.get(cliente.enderecoId||0)||0],...cliente})
      })
      this.clienteId=1
    })
  })
}
delete(index:number){
  Carrinho.excluirProduto(index);
}
editar = false;
clienteId = 0;
nomeCliente=""
ngOnInit(): void {
  this.iniciar();
  console.log(Carrinho.getCliente_Id());
  if(Carrinho.getCliente_Id()>0){
    this.editar = true
    this.requestc.getCliente().pipe(take(1)).subscribe(res=>{
      (<IClientePost[]>res).forEach(cliente=>{
        if(cliente.id==Carrinho.getCliente_Id()){
          this.nomeCliente=cliente.nome;
        }
        this.calcularValorTotal()
      })})
  }else{
    this.getClientes();
  }
}
calcularValorTotal() {
  this.valor_total=Carrinho.getValor_Total();
}
Excluir(id:number){
  Carrinho.excluirProduto(id);
  this.calcularValorTotal();
}
clienteSelecionado = ""
Subtrair(i:number){
    let itemE=this.getCarrinho()[i];
    let quantidade=itemE.quantidade;
    if((quantidade--)>1){
      this.getCarrinho()[i].quantidade--;
      this.calcularValorTotal();
    }else{
      this.Excluir(i)
    }
  }
  async Adicionar(i:number){
    let itemE=this.getCarrinho()[i];
    let limiteSuperior= this.getProduto(itemE.produtoId).qtdEstoque;
    let quantidade=itemE.quantidade;
    if(limiteSuperior>quantidade++){
      this.getCarrinho()[i].quantidade++;
      this.calcularValorTotal();
    }
  }
  comprar(){
    if(!this.editar){
      Carrinho.setCliente_Id(Number(this.clienteSelecionado))
    }
    Carrinho.salvar(this.http);
  }
}