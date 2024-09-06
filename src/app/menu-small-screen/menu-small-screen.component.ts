import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-small-screen',
  templateUrl: './menu-small-screen.component.html',
  styleUrl: './menu-small-screen.component.css'
})
export class MenuSmallScreenComponent {
  handleClick(event: Event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
  }
}
