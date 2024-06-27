import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes.component';
import { CalificacionPropietarioComponent } from './calificacion-propietario/calificacion-propietario.component';
import { SesionRegistroComponent } from './sesion-registro/sesion-registro.component';
import { PublicarComponent } from './publicar/publicar.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'inicio', component: LandingComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'calificacion-propietario', component: CalificacionPropietarioComponent },
  { path: 'sesion-registro', component: SesionRegistroComponent},
  { path: 'publicar', component: PublicarComponent},
  {path: 'propiedades',component:PropiedadesComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

