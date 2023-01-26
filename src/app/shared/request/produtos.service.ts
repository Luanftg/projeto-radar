import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduto } from 'src/app/shared/models/produto.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosRequestService {

  constructor( private http: HttpClient ,
    private auth:AuthService,) { }

  getProduto(){
    let produtos = this.http.get(environment.url + 'produtos',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
    return produtos
  }
  postProduto(produto:IProduto){
    return this.http.post<IProduto>(environment.url + 'produtos/',produto,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  updateProduto(produto:IProduto){
    return this.http.put<IProduto>(environment.url + 'produtos/'+produto.id,produto,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  deleteProduto(id:number){
    return this.http.delete<IProduto>(environment.url + `produtos/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
}
