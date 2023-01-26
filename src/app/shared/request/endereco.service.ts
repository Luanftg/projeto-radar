import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEndereco } from 'src/app/shared/models/endereco.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoRequestService {

  constructor( private http: HttpClient,
    private auth:AuthService,) { }

  getEndereco(){
    let enderecos = this.http.get(environment.url + 'enderecos',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
    return enderecos
  }
  postEndereco(endereco:IEndereco){
    return this.http.post<IEndereco>(environment.url + 'enderecos/',endereco,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  updateEndereco(endereco:IEndereco){
    return this.http.put<IEndereco>(environment.url + 'enderecos/'+endereco.id,endereco,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  deleteEndereco(id:number){
    return this.http.delete<IEndereco>(environment.url + `enderecos/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
}
