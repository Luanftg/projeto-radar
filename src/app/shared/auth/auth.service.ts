import { Injectable } from '@angular/core';
import { ILoginRecebido } from '../models/loginRecebido.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(usuario:ILoginRecebido){
    localStorage.setItem( 'token', usuario.token)
  }

  getToken(){
    let usuario = localStorage.getItem('token')
    if(usuario){
      return usuario
    }
    return null
  }

  verificaLogado(): boolean{
    return localStorage.getItem('token') ? true : false
  }
}
