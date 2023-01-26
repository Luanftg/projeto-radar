import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPedidoProduto } from '../models/pedido-produto.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosProdutosRequestService {
  constructor( private http: HttpClient, 
    private auth:AuthService,) { }
  
  

  getPedidoProduto(){
    let pedidosProdutos = this.http.get(environment.url + 'pedidosProdutos',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
    return pedidosProdutos
  }
  postPedidoProduto(pedidoProduto:IPedidoProduto){
    return this.http.post<IPedidoProduto>(environment.url + 'pedidosProdutos',pedidoProduto,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  updatePedidoProduto(pedidoProduto:IPedidoProduto){
    return this.http.put<IPedidoProduto>(environment.url + 'pedidosProdutos/'+pedidoProduto.id,pedidoProduto,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
  deletePedidoProduto(id:number){
    return this.http.delete<IPedidoProduto>(environment.url + `produtos/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
}
