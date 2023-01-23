import { IPedido } from '../models/pedido.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosRequestService {

  url = environment.url

  constructor(private http: HttpClient) { }

  getPedido(){
    let pedidos = this.http.get(environment.url + 'pedidos')
    console.log('get no request pedido ', pedidos )
    return pedidos
  }

  postPedido(pedido:IPedido){
    console.log(environment.url + 'pedidos/',pedido)
    return this.http.post<IPedido>(environment.url + 'pedidos/',pedido)
  }

  updatePedido(pedido:IPedido){
    return this.http.put<any>(environment.url + 'pedidos/'+pedido.id,pedido)
  }

  deletePedido(id:number){
    return this.http.delete<IPedido>(environment.url + `pedidos/${id}`)
  }

}
