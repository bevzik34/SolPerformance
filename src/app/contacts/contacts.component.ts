import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/animations.module';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  animations: [fadeAnimation] 
})
export class ContactsComponent {

}
