import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoja } from 'src/app/shared/models/loja.interface';
import { IEndereco } from '../models/endereco.interface';
import { EnderecoRequestService } from './endereco.service';
import { ILojaPost } from '../models/lojaPost.interface';
import { Observable, take } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class LojasRequestService {

  constructor( private http: HttpClient,
    private auth:AuthService,
    private endRequest:EnderecoRequestService,
    private router: Router, ) { }

  getLoja(){
    let lojas = this.http.get(environment.url + 'lojas', { headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})

    return lojas;
  }
  postLoja(loja:ILoja, modal:NgbActiveModal){
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
    .subscribe(resp=>{
    this.endRequest.getEndereco().pipe(take(1)).subscribe(res =>{
        let post={
          nome: loja.nome
        } as ILojaPost;
        post.enderecoId=(<IEndereco[]>res).pop()?.id;
        this.http.post<ILoja>(environment.url + 'lojas/',post,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})}).pipe(take(1)).subscribe(()=>modal.dismiss())
    });})
  }

  updateLoja(loja:ILojaPost){
    return this.http.put<ILojaPost>(environment.url + 'lojas/'+loja.id,loja,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  deleteLoja(id:number){
    return this.http.delete<ILoja>(environment.url + `lojas/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
}
