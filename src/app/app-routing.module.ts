import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';


const routes: Routes = [
  {path:'listar', component: ListarComponent},
  {path:'editar', component: EditarComponent},
  {path:'agregar', component: AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
