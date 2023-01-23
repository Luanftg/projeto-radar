import { PedidosRequestService } from "../shared/request/pedidos.service";
import { IPedidoProduto } from "../shared/models/pedido-produto.interface";
import { HttpClient } from "@angular/common/http";
import { IPedido } from "../shared/models/pedido.interface";
import { IProduto } from "../shared/models/produto.interface";
import { PedidosProdutosRequestService } from "../shared/request/pedidosprodutos.service";

export class Carrinho{

    private static carrinho: (IPedidoProduto)[]=[{"id":0,"pedidoId":2,"produtoId":1,"valor":10,"quantidade":2},
    {"id":0,"pedidoId":2,"produtoId":2,"valor":10,"quantidade":2}];
    private static pedido: IPedido={"id":0,"clienteId":3,"valorTotal":40,"dtCriacao":new Date((new Date()).getTime())};
    
    public static buscaTamanho():number{
        return Carrinho.carrinho.length;
    }

    public static setCliente_Id(id:number):void{
        this.pedido.clienteId=id;
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

    public static excluirProduto(id:number):void{
        Carrinho.carrinho.splice(id,1);
        }

    public static getValor_Total():number{
        let total=0;
        Carrinho.carrinho.forEach(item=>{
            total+=item.quantidade*item.valor;
        })
        return Carrinho.pedido.valorTotal=total;
    }

    public static async salvar(http:HttpClient):Promise<void>{
        let request = new PedidosRequestService(http);
        let pedidoProdutoRequest=new PedidosProdutosRequestService(http);
        if(this.pedido.id){
            request.updatePedido(this.pedido).subscribe();
            this.carrinho.forEach(pedidoProduto=>{
                if(pedidoProduto.id>0){
                    pedidoProduto.pedidoId=this.pedido.id;
                    pedidoProdutoRequest.postPedidoProduto(pedidoProduto).subscribe();
                }else{
                    pedidoProdutoRequest.updatePedidoProduto(pedidoProduto).subscribe();
                }
            })
        }else{
            let pedidoPost: IPedido = {} as IPedido;
            pedidoPost.dtCriacao=new Date((new Date()).getTime());
            pedidoPost.valorTotal=this.getValor_Total();
            pedidoPost.clienteId=this.pedido.clienteId;
            request.postPedido(pedidoPost).subscribe();
            let pedido = [] as IPedido[];
            request.getPedido()
            .subscribe( res => {pedido = <IPedido[]>res
                let pedidoLast=pedido.pop();
                this.carrinho.forEach(pedidoProduto => {
                    pedidoProduto.pedidoId=pedidoLast ? pedidoLast.id : 0;
                    pedidoProdutoRequest.postPedidoProduto(pedidoProduto).subscribe();
                });
            });
        }
    }

    public static reset(){
        while(this.carrinho.length>0){
            this.carrinho.pop();
        }
    }
}