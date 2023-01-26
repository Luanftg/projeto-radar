import { ICliente } from '../models/cliente.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEndereco } from '../models/endereco.interface';
import { IClientePost } from '../models/clientePost.interface';
import { take } from 'rxjs';
import { EnderecoRequestService } from './endereco.service';
import { AuthService } from '../auth/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ClientesRequestService {

  constructor( private http: HttpClient,
    private endRequest:EnderecoRequestService,
    private auth:AuthService,  ) { }

  getCliente(){
    return this.http.get(environment.url + 'clientes',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})

  }
  postCliente(cliente:ICliente, modal:NgbActiveModal){
    let endereco={
      bairro:cliente.bairro,
      cep: cliente.cep.toString(),
      cidade:cliente.cidade,
      complemento:cliente.complemento,
      estado: cliente.estado,
      logradouro: cliente.logradouro,
      numero: cliente.numero.toString()
    } as IEndereco;
    this.endRequest.postEndereco(endereco)
    .pipe(take(1))
    .subscribe(rest=>{
    this.endRequest.getEndereco().pipe(take(1)).subscribe(res =>{
        let post={
          nome: cliente.nome,
          cpf: cliente.cpf.toString(),
          email: cliente.email,
          telefone: cliente.telefone
        } as IClientePost;
        post.enderecoId=(<IEndereco[]>res).pop()?.id;
        this.http.post<ICliente>(environment.url + 'clientes/',post,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})}).pipe(take(1)).subscribe(()=>modal.dismiss())
    });
  })
  }

  updateCliente(cliente:IClientePost){
    return this.http.put<IClientePost>(environment.url + 'clientes/'+cliente.id,cliente,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  deleteCliente(id:number){
    return this.http.delete<ICliente>(environment.url + `clientes/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

}
