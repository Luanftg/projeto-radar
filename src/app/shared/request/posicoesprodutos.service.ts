import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPosicaoProduto } from '../models/posicao-produto.interface';

@Injectable({
  providedIn: 'root'
})
export class PosicaoProdutoRequestService {

  constructor( private http: HttpClient ) { }
  

  getPosicoesProdutos(){
    let posicoesProdutos = this.http.get(environment.url + 'posicoesProdutos')
    return posicoesProdutos
  }
  postPosicoesProdutos(posicaoProduto:IPosicaoProduto){
    return this.http.post<IPosicaoProduto>(environment.url + 'posicoesProdutos/',posicaoProduto)
  }
  updatePosicoesProdutos(posicaoProduto:IPosicaoProduto){
    return this.http.put<IPosicaoProduto>(environment.url + 'posicoesProdutos/'+posicaoProduto.id,posicaoProduto)
  }
  deletePosicaoProduto(id:number){
    return this.http.delete<IPosicaoProduto>(environment.url + `produtos/${id}`)
  }

}
