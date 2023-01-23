import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEndereco } from 'src/app/shared/models/endereco.interface';

@Injectable({
  providedIn: 'root'
})
export class EnderecoRequestService {

  constructor( private http: HttpClient ) { }

  getEndereco(){
    let enderecos = this.http.get(environment.url + 'enderecos')
    return enderecos
  }
  postEndereco(endereco:IEndereco){
    console.log(endereco )
    return this.http.post<IEndereco>(environment.url + 'enderecos/',endereco)
  }

  updateEndereco(endereco:IEndereco){
    return this.http.put<IEndereco>(environment.url + 'enderecos/'+endereco.id,endereco)
  }

  deleteEndereco(id:number){
    return this.http.delete<IEndereco>(environment.url + `enderecos/${id}`)
  }
}
