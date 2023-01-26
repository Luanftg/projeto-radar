import { PedidosRequestService } from "../shared/request/pedidos.service";
import { IPedidoProduto } from "../shared/models/pedido-produto.interface";
import { HttpClient } from "@angular/common/http";
import { IPedido } from "../shared/models/pedido.interface";
import { IProduto } from "../shared/models/produto.interface";
import { PedidosProdutosRequestService } from "../shared/request/pedidosprodutos.service";
import { AuthService } from "../shared/auth/auth.service";
import { Router } from "@angular/router";
import { take } from "rxjs";

export class Carrinho{
    static setCarrinho(pedido: IPedido, pedidosProdutos: IPedidoProduto[]) {
      Carrinho.carrinho=pedidosProdutos;
      Carrinho.pedido=pedido;
      console.log(pedidosProdutos)
    }

    private static carrinho: (IPedidoProduto)[]=[];
    private static pedido: IPedido={} as IPedido;
    
    public static buscaTamanho():number{
        return Carrinho.carrinho.length;
    }

    public static setCliente_Id(id:number):void{
        Carrinho.pedido.clienteId=id;
    }

    public static getCliente_Id():number{
        return Carrinho.pedido.clienteId;
    }

    public static listar():(IPedidoProduto)[]{
        return Carrinho.carrinho;
    }

    public static setPedido(cliente_id:number){
        Carrinho.pedido.clienteId=cliente_id;
    }

    public static adicionaPedidoProduto(produto: IProduto):void{
        let existePedidoProduto = Carrinho.verifica(produto.id);
        
        if(existePedidoProduto > -1){
            if(Number(Carrinho.carrinho[existePedidoProduto].quantidade) < Number(produto.qtdEstoque))
                Carrinho.carrinho[existePedidoProduto].quantidade = Number(Carrinho.carrinho[existePedidoProduto].quantidade) + 1;
        }else{
            let pedidoProduto={} as IPedidoProduto;
            pedidoProduto.quantidade=1
            pedidoProduto.produtoId=produto.id;
            pedidoProduto.valor=produto.valor;
            Carrinho.carrinho.push(pedidoProduto);
        }
     }

    public static verifica(produtoId : Number) : number{
        for (let i = 0; i < Carrinho.carrinho.length; i++) {
            const item = Carrinho.carrinho[i];
            if(item.produtoId.toString() === produtoId.toString()){
                 return i
            }
        }
        return -1
    }

    public static excluirProduto(http:HttpClient,id:number):void{
        if(Carrinho.getCliente_Id()===0){
            Carrinho.carrinho.splice(id,1);
            return
        }
        console.log(Carrinho.carrinho[id].id)
        let pedidoProdutoRequest=new PedidosProdutosRequestService(http, new AuthService());
        pedidoProdutoRequest.deletePedidoProduto(Carrinho.carrinho[id].id).pipe(take(1)).subscribe();
        Carrinho.carrinho.splice(id,1);
        }

    public static getValor_Total():number{
        let total=0;
        Carrinho.carrinho.forEach(item=>{
            total+=item.quantidade*item.valor;
        })
        return Carrinho.pedido.valorTotal=total;
    }

    public static async salvar(http:HttpClient, router:Router):Promise<void>{
        let request = new PedidosRequestService(http, new AuthService());
        let pedidoProdutoRequest=new PedidosProdutosRequestService(http, new AuthService());
        if(Carrinho.pedido.id){
            console.log(Carrinho.pedido)
            request.updatePedido(Carrinho.pedido).pipe(take(1)).subscribe(()=>
            router.navigate(['pedidos']));
            Carrinho.carrinho.forEach(pedidoProduto=>{
                if(pedidoProduto.id>0){
                    pedidoProdutoRequest.updatePedidoProduto(pedidoProduto).pipe(take(1)).subscribe();
                }else{
                    pedidoProduto.pedidoId=Carrinho.pedido.id;
                    pedidoProdutoRequest.postPedidoProduto(pedidoProduto).pipe(take(1)).subscribe();
                }
            })
            Carrinho.reset();
        }else{
            let pedidoPost: IPedido = {} as IPedido;
            pedidoPost.dtCriacao=new Date((new Date()).getTime());
            pedidoPost.valorTotal=Carrinho.getValor_Total();
            pedidoPost.clienteId=Carrinho.pedido.clienteId;
            request.postPedido(pedidoPost).pipe(take(1)).subscribe(()=>{let pedido = [] as IPedido[];
                router.navigate(['pedidos']);
                request.getPedido()
                .subscribe( res => {pedido = <IPedido[]>res
                    let pedidoLast=pedido.pop();
                    let n = Carrinho.carrinho.length
                    let total=0;
                    Carrinho.carrinho.forEach(pedidoProduto => {
                        pedidoProduto.pedidoId=pedidoLast ? pedidoLast.id : 0;
                        pedidoProdutoRequest.postPedidoProduto(pedidoProduto).pipe(take(1)).subscribe(
                            ()=>{
                                total+=1
                                if(total==n){
                                    Carrinho.reset();
                                }
                            }
                        );
                    });
                });});
        }
    }

    public static reset(){
        while(Carrinho.carrinho.length>0){
            Carrinho.carrinho.pop();
        }
    }
}