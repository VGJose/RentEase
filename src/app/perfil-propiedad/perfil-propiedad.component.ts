import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-propiedad',
  templateUrl: './perfil-propiedad.component.html',
  styleUrl: './perfil-propiedad.component.css'
})
export class PerfilPropiedadComponent {
  receivedData: any;


  ngOnInit() {
    // Retrieve the JSON data from route state
    this.receivedData = history.state.data;
  }

}
