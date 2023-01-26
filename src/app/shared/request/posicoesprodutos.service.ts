import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPosicaoProduto } from '../models/posicao-produto.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PosicaoProdutoRequestService {

  constructor( private http: HttpClient ,
    private auth:AuthService,) { }
  

  getPosicoesProdutos(){
    let posicoesProdutos = this.http.get(environment.url + 'posicoesProdutos',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
    return posicoesProdutos
  }
  postPosicoesProdutos(posicaoProduto:IPosicaoProduto){
    return this.http.post<IPosicaoProduto>(environment.url + 'posicoesProdutos/',posicaoProduto,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
  updatePosicoesProdutos(posicaoProduto:IPosicaoProduto){
    return this.http.put<IPosicaoProduto>(environment.url + 'posicoesProdutos/'+posicaoProduto.id,posicaoProduto,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
  deletePosicaoProduto(id:number){
    return this.http.delete<IPosicaoProduto>(environment.url + `posicoesProdutos/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

}
