import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';



@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


  projects = [
    { name: 'C#' },
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Kotlin' },

  ];

  /* {
  name: 'Mi Proyecto Angular',
    imageUrl: 'assets/img/angular-proyecto.png'
  } */

}
