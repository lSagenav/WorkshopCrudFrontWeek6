// en ests clase estaran las url de las plantillas a trabajar en cada unas d elas aciones que se le daran los botones


import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Persona} from "../Modelo/Persona";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) {
  }

  Url = 'http://localhost:9090/personas'
  Url2 = 'http://localhost:9090/persona'
 // Url3 = 'http://localhost:9090/personas'


  getPersona() {
    return this.http.get<Persona[]>(this.Url);

  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url2, JSON.stringify(persona), {headers: {"Content-Type": "application/json"}});
  }


}

