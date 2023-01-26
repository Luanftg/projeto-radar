import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUsuario } from 'src/app/shared/models/usuario.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosRequestService {

  constructor( private http: HttpClient ,
    private auth:AuthService,) { }

  getUsuario(){
    let usuarios = this.http.get(environment.url + 'usuarios',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
    return usuarios
  }
  postUsuario(usuario:IUsuario){
    usuario.regra="adm";
    return this.http.post<IUsuario>(environment.url + 'usuarios/',usuario,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  updateUsuario(usuario:IUsuario){
    return this.http.put<IUsuario>(environment.url + 'usuarios/'+usuario.id,usuario,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  deleteUsuario(id:number){
    return this.http.delete<IUsuario>(environment.url + `usuarios/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }
}