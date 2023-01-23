import { AuthService } from './../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { Carrinho } from 'src/app/services/Carrinho';
import { IPedidoProduto } from 'src/app/shared/models/pedido-produto.interface';
import { ProdutosRequestService } from 'src/app/shared/request/produtos.service';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private request: ProdutosRequestService,
    public auth: AuthService,
    private http:HttpClient
    ) { 
    }
  valor_total=0;
  produtos:IProduto[]=[];
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
          console.log("batata"+this.hashFindProduto.get(element));
        }
      })
      this.calcularValorTotal()
}
getProduto(index:number){
  
    let i = this.hashFindProduto.get(index)
    console.log(i)
    console.log(index)
    if(i||i==0){
        return this.produtos[i];
    }
    let val = {} as IProduto;
    return val;
}
delete(index:number){

}
ngOnInit(): void {
  this.iniciar();
}
calcularValorTotal() {
  this.valor_total=Carrinho.getValor_Total();
}
Excluir(id:number){
  Carrinho.excluirProduto(id);
  this.calcularValorTotal();
}
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
    Carrinho.salvar(this.http);
  }
}