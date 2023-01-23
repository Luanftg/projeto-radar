import { ICliente } from '../models/cliente.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduto } from 'src/app/shared/models/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosRequestService {

  constructor( private http: HttpClient ) { }

  getProduto(){
    let produtos = this.http.get(environment.url + 'produtos')
    return produtos
  }
  postProduto(produto:IProduto){
    console.log(produto )
    return this.http.post<IProduto>(environment.url + 'produtos/',produto)
  }

  updateProduto(produto:IProduto){
    return this.http.put<IProduto>(environment.url + 'produtos/'+produto.id,produto)
  }

  deleteProduto(id:number){
    return this.http.delete<IProduto>(environment.url + `produtos/${id}`)
  }
}
