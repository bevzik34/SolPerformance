import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/animations.module';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  animations: [fadeAnimation] 

})
export class AccueilComponent {

}
