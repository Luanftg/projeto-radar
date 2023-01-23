import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICampanha } from '../models/campanha.interface';

@Injectable({
  providedIn: 'root'
})
export class CampanhasRequestService {

  constructor( private http: HttpClient ) { }


  getCampanha(){
    return this.http.get(environment.url + 'campanhas')

  }
  postCampanha(campanha:ICampanha){
    return this.http.post<ICampanha>(environment.url + 'campanhas/',campanha)
  }

  updateCampanha(campanha:ICampanha){
    return this.http.put<ICampanha>(environment.url + 'campanhas/'+campanha.id,campanha)
  }

  deleteCampanha(id:number){
    return this.http.delete<ICampanha>(environment.url + `campanhas/${id}`)
  }

}
