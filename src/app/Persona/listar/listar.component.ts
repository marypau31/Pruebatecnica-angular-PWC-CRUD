import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private route:Router, private service:ServiceService) { }

  personas:Persona[];
  ngOnInit(): void {
    this.Listar();
  }

  Listar(){
    this.personas=null;
    this.service.getPersonas().subscribe(
      data => {
        this.personas = data;
      }
    );
  }

  Editar(id: number):void{
    localStorage.setItem("id",id.toString());
    this.route.navigate(["editar"]);
  }

  Borrar(id: number){
    this.service.deletePersona(id).subscribe(
      data => {
        alert("Usuario eliminado...");
        this.Listar();
      }   
    )
  }
}
