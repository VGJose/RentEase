import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(component: string) {
    this.componentSelected.emit(component);
  }
}
