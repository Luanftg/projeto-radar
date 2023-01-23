import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { ICampanha } from '../models/campanha.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor( private http: HttpClient ) { }

  getCliente(){
    return this.http.get(environment.url + 'clientes')

  }
  postCliente(cliente:ICliente){
    return this.http.post<ICliente>(environment.url + 'clientes/',cliente)
  }

  updateCliente(cliente:ICliente){
    return this.http.put<ICliente>(environment.url + 'clientes/',cliente)
  }

  deleteCliente(id:number){
    return this.http.delete<ICliente>(environment.url + `clientes/${id}`)
  }



  getProduto(){
    let a = this.http.get(environment.url + 'produtos')
    return a
  }
  postProduto(produto:IProduto){
    console.log('post no request ' + produto )
    return this.http.post<IProduto>(environment.url + 'produtos/',produto)
  }

  updateProduto(produto:IProduto){
    return this.http.put<IProduto>(environment.url + 'produtos/',produto)
  }

  deleteProduto(id:number){
    return this.http.delete<ICliente>(environment.url + `produtos/${id}`)
  }

  getPedidoCliente(){
    let a = this.http.get(environment.url + 'pedidos')
    return a
  }
  postPedidoCliente(pedidoCliente:any){
    console.log('post no request ' + pedidoCliente )
    return this.http.post<any>(environment.url + 'pedidos/',pedidoCliente)
  }

  updatePedidoCliente(pedidoCliente:any){
    return this.http.put<any>(environment.url + 'pedidos/',pedidoCliente)
  }

  getPedidoProduto(){
    let a = this.http.get(environment.url + 'pedidosProdutos')
    return a
  }
  postPedidoProduto(pedidoProduto:any){
    console.log('post no request ' + pedidoProduto )
    return this.http.post<any>(environment.url + 'pedidosProdutos/',pedidoProduto)
  }

  updatePedidoProduto(pedidoProduto:any){
    return this.http.put<any>(environment.url + 'pedidosProdutos/',pedidoProduto)
  }

}