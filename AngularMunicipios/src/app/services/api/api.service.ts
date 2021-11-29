import { Injectable } from '@angular/core';
import {listMunicipiosI} from '../../models/listMunicipios.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  constructor(private http:HttpClient) { }

  ListMunicipios():Observable<listMunicipiosI[]>{
    let dir = "https://localhost:44385/api/Municipios";
    return this.http.get<listMunicipiosI[]>(dir);
  }
}

