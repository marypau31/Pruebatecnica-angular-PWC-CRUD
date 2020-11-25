import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona:Persona = new Persona();
  constructor(private route:Router, private service:ServiceService) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.service.getPersona(+id).subscribe(
      data => {
        this.persona=data;
      },
    );
  }

  Actualizar(){
    this.service.updatePersona(this.persona).subscribe(
      data => {
        alert("Se actualizó con éxito");
        this.route.navigate(["listar"]);
      },
      error => {
        alert("Ocurrio un error" +error); 
      }
    );
  }

}
