import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  persona:Persona
  constructor(private http:HttpClient) { }

  Url='https://pruebatecnica-pwc.herokuapp.com/persona';

  getPersona(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url,persona);
  }
  deletePersona(id:number){
    return this.http.delete<Persona>(this.Url+"/"+id);
  }
}
