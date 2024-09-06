import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/animations.module';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrl: './performances.component.css',
  animations: [fadeAnimation] 
})
export class PerformancesComponent {

  // Tableau de performances
  performances = [
    {
      title: 'Festival de Colmar',
      description: 'Sol a captivé le public au Festival de Colmar en maniant gracieusement le ruban et le cerceau au sol, puis en montant à plus de 7 mètres de hauteur pour une performance époustouflante sur le cerceau aérien.',
      image: '../assets/colmar_festival.jpg'
    },
    {
      title: 'Fashion Week de New York',
      description: 'Lors de la Fashion Week de New York, Sol a créé un nouveau personnage sombre maîtrisant le nunchaku, démontrant ainsi son innovation et sa résilience face aux restrictions sur les performances de feu.',
      image: 'assets/fashion_week_ny.jpg'
    },
    {
      title: 'Performance au Louvre, Paris',
      description: 'Sol a ébloui le public au Louvre avec une chorégraphie enflammée, mêlant habilement danse et pyrotechnie devant un cadre historique exceptionnel.',
      image: 'assets/louvre_performance.jpg'
    },
    {
      title: 'Spectacle de Feu d\'Artifice à Monaco',
      description: 'Sol a dirigé un spectacle de feu d\'artifice à Monaco, utilisant son expertise en pyrotechnie pour créer une expérience visuelle inoubliable pour les spectateurs.',
      image: 'assets/monaco_fireworks.jpg'
    },
    {
      title: 'Performance Acrobatique en Corse',
      description: 'Sol a présenté une performance acrobatique en Corse, alliant grâce, force et agilité pour créer une expérience artistique saisissante au cœur de la nature.',
      image: 'assets/corsica_acrobatics.jpg'
    },
    {
      title: 'Show de Feu à Las Vegas',
      description: 'Sol a enflammé Las Vegas avec un show pyrotechnique spectaculaire, démontrant son talent exceptionnel et sa capacité à repousser les limites de l\'art du feu.',
      image: 'assets/vegas_fire_show.jpg'
    }
  ];

}
