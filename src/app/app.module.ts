import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SesionRegistroComponent } from './sesion-registro/sesion-registro.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { LandingComponent } from './landing/landing.component';
import { CalificacionPropietarioComponent } from './calificacion-propietario/calificacion-propietario.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { PublicarComponent } from './publicar/publicar.component';
import { ContratoComponent } from './contrato/contrato.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { PerfilPropiedadComponent } from './perfil-propiedad/perfil-propiedad.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SesionRegistroComponent,
    MensajesComponent,
    LandingComponent,
    CalificacionPropietarioComponent,
    PropiedadesComponent,
    PublicarComponent,
    ContratoComponent,
    PerfilPropiedadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
