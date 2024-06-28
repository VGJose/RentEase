import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  title = 'image-gallery';
  public data:any = []
  constructor(public http: HttpClient, public router: Router) {

  }

  ngOnInit() {
    this.getData2()

  }
 


  getData2(){
    const url2 ='https://proyecto-2-frvv.onrender.com/Propiedad'
    this.http.get(url2).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  goToReceiver() {
    // Navigate to the receiver page with JSON data as query parameters
    this.router.navigate(['/perfil-propiedad'], { state: { data: this.data } });
  }

}
