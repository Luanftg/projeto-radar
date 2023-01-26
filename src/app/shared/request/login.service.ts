import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/login.interface';
import { ILoginRecebido } from '../models/loginRecebido.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginRequestService {
  constructor( private http: HttpClient ) { }

  postLogin(login:ILogin){
    return this.http.post<ILoginRecebido>(environment.url + 'login',login)

  }
}
