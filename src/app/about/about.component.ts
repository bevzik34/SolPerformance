import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation,Pagination,EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation:ViewEncapsulation.None


})
export class AboutComponent {








}



