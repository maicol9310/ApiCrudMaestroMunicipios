import { Injectable } from '@angular/core';
import {listMunicipiosI} from '../../models/listMunicipios.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {responseI} from '../../models/response.interface'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  constructor(private http:HttpClient) { }

  ListMunicipios():Observable<listMunicipiosI[]>{
    let dir = "https://localhost:44385/api/Municipios";
    return this.http.get<listMunicipiosI[]>(dir);
  }

  GetSingleMunicipio(id:any):Observable<listMunicipiosI>{
    let dir = "https://localhost:44385/api/Municipios/" + id;
    return this.http.get<listMunicipiosI>(dir);
  }

  PutMunicipio(id:any, form:listMunicipiosI):Observable<responseI>{
    let dir = "https://localhost:44385/api/Municipios/" + id;
    return this.http.put<responseI>(dir, form);
  }
}

