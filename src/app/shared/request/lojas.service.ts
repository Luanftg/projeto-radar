import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoja } from 'src/app/shared/models/loja.interface';
import { IEndereco } from '../models/endereco.interface';
import { EnderecoRequestService } from './endereco.service';
import { ILojaPost } from '../models/lojaPost.interface';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojasRequestService {

  constructor( private http: HttpClient,
    private endRequest:EnderecoRequestService ) { }

  getLoja(){
    let lojas = this.http.get(environment.url + 'lojas')
    return lojas
  }
  postLoja(loja:ILoja){
    let endereco={
      bairro:loja.bairro,
      cep: loja.cep.toString(),
      cidade:loja.cidade,
      complemento:loja.complemento,
      estado: loja.estado,
      logradouro: loja.logradouro,
      numero: loja.numero.toString()
    } as IEndereco;
    this.endRequest.postEndereco(endereco)
    .pipe(take(1))
    .subscribe();
    this.endRequest.getEndereco().pipe(take(1)).subscribe(res =>{
        let post={
          nome: loja.nome
        } as ILojaPost;
        post.enderecoId=(<IEndereco[]>res).pop()?.id;
        this.http.post<ILoja>(environment.url + 'lojas/',post).pipe(take(1)).subscribe()
    });
  }

  updateLoja(loja:ILoja){
    return this.http.put<ILoja>(environment.url + 'lojas/'+loja.id,loja)
  }

  deleteLoja(id:number){
    return this.http.delete<ILoja>(environment.url + `lojas/${id}`)
  }
}
