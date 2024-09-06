import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimationsModule } from './animations/animations.module'; // Importez AnimationsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuSmallScreenComponent } from './menu-small-screen/menu-small-screen.component';
import { AboutComponent } from './about/about.component';
import { PerformancesComponent } from './performances/performances.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    MenuSmallScreenComponent,

    AboutComponent,
    PerformancesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AnimationsModule, // Ajoutez AnimationsModule ici
    AppRoutingModule,
   SwiperModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
