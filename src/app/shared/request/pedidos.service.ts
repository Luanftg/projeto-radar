import { IPedido } from '../models/pedido.interface';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosRequestService {

  url = environment.url

  constructor(private http: HttpClient,
    private auth:AuthService,) { }

  getPedido(){
    let pedidos = this.http.get(environment.url + 'pedidos',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
    return pedidos
  }

  postPedido(pedido:IPedido){
    return this.http.post<IPedido>(environment.url + 'pedidos/',pedido,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  updatePedido(pedido:IPedido){
    return this.http.put<any>(environment.url + 'pedidos/'+pedido.id,pedido,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  deletePedido(id:number){
    return this.http.delete<IPedido>(environment.url + `pedidos/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

}
