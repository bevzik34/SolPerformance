import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


import SwiperCore, { Navigation,Pagination,EffectCube} from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCube]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  
  
  title = 'SOL-performance';
  hamburger = false;

  handleHamburgerClick() {
    this.hamburger = !this.hamburger;
    console.log('Hamburger cliqué !' + this.hamburger);
  }
}
