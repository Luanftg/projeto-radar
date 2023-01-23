import { ICliente } from '../models/cliente.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEndereco } from '../models/endereco.interface';
import { IClientePost } from '../models/clientePost.interface';
import { take } from 'rxjs';
import { EnderecoRequestService } from './endereco.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesRequestService {

  constructor( private http: HttpClient,
    private endRequest:EnderecoRequestService  ) { }

  getCliente(){
    return this.http.get(environment.url + 'clientes')

  }
  postCliente(cliente:ICliente){
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
    .subscribe();
    this.endRequest.getEndereco().pipe(take(1)).subscribe(res =>{
        let post={
          nome: cliente.nome,
          cpf: cliente.cpf,
          email: cliente.email,
          telefone: cliente.telefone
        } as IClientePost;
        post.enderecoId=(<IEndereco[]>res).pop()?.id;
        console.log(post)
        this.http.post<ICliente>(environment.url + 'clientes/',post).pipe(take(1)).subscribe()
    });
  }

  updateCliente(cliente:ICliente){
    return this.http.put<ICliente>(environment.url + 'clientes/'+cliente.id,cliente)
  }

  deleteCliente(id:number){
    return this.http.delete<ICliente>(environment.url + `clientes/${id}`)
  }

}
