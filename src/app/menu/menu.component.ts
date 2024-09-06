import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen = false;
  
  @Output() hamburgerClicked: EventEmitter<void> = new EventEmitter<void>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburgerClicked.emit();
  }
  handleClick(event: Event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
  }
}
