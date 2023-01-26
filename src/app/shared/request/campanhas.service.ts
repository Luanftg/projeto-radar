import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { ICampanha } from '../models/campanha.interface';

@Injectable({
  providedIn: 'root'
})
export class CampanhasRequestService {

  constructor( private http: HttpClient ,
    private auth:AuthService,) { }


  getCampanha(){
    return this.http.get(environment.url + 'campanhas',{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})

  }
  postCampanha(campanha:ICampanha){
    return this.http.post<ICampanha>(environment.url + 'campanhas/',campanha,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  updateCampanha(campanha:ICampanha){
    return this.http.put<ICampanha>(environment.url + 'campanhas/'+campanha.id,campanha,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

  deleteCampanha(id:number){
    return this.http.delete<ICampanha>(environment.url + `campanhas/${id}`,{ headers: new HttpHeaders({authorization: `${this.auth.getToken()}`})})
  }

}
