import { ContratoComponent } from './contrato/contrato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes.component';
import { CalificacionPropietarioComponent } from './calificacion-propietario/calificacion-propietario.component';
import { SesionRegistroComponent } from './sesion-registro/sesion-registro.component';
import { PublicarComponent } from './publicar/publicar.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { LandingComponent } from './landing/landing.component';
import { PerfilPropiedadComponent } from './perfil-propiedad/perfil-propiedad.component';



const routes: Routes = [
  { path: 'inicio', component: LandingComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'calificacion-propietario', component: CalificacionPropietarioComponent },
  { path: 'sesion-registro', component: SesionRegistroComponent},
  { path: 'publicar', component: PublicarComponent},
  { path: 'propiedades',component:PropiedadesComponent},
  { path: 'contrato',component:ContratoComponent},
  { path: 'perfil-propiedad',component:PerfilPropiedadComponent},
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

