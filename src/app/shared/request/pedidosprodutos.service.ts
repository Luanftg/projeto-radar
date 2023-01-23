import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPedidoProduto } from '../models/pedido-produto.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosProdutosRequestService {

  constructor( private http: HttpClient ) { }
  
  

  getPedidoProduto(){
    let pedidosProdutos = this.http.get(environment.url + 'pedidosProdutos')
    return pedidosProdutos
  }
  postPedidoProduto(pedidoProduto:IPedidoProduto){
    console.log(environment.url + 'pedidosProdutos',pedidoProduto)
    return this.http.post<IPedidoProduto>(environment.url + 'pedidosProdutos',pedidoProduto)
  }

  updatePedidoProduto(pedidoProduto:IPedidoProduto){
    return this.http.put<IPedidoProduto>(environment.url + 'pedidosProdutos/'+pedidoProduto.id,pedidoProduto)
  }
  deletePedidoProduto(id:number){
    return this.http.delete<IPedidoProduto>(environment.url + `produtos/${id}`)
  }
}
