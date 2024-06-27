import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion-registro',
  templateUrl: './sesion-registro.component.html',
  styleUrls: ['./sesion-registro.component.css']
})
export class SesionRegistroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Panel switch logic
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    }
  }

  navigateToMain() {
    this.router.navigate(['/inicio']);
  }
}
