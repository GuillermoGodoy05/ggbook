import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


  projects = [
    {
      name: 'My Finance',
      description: 'finance',

      tech: ['.Net', 'React'],

      label2: 'Try',
      icon2: 'computer',
      link2: 'https://matesoft-myfinances.netlify.app/',

      label3: 'Git',
      icon3: 'code',
      link3: 'https://github.com/GuillermoGodoy05',

    },
    {
      name: 'API Sistema Ventas',
      description: 'Api Sist Venta',

      tech: ['.Net', 'React'],

      label2: 'Try',
      icon2: 'computer',
      link2: 'https://matesoft-myfinances.netlify.app/',

      label3: 'Back',
      icon3: 'code',
      link3: 'https://github.com/GuillermoGodoy05/BackendSistemaVenta',

      labelOp: 'Front',
      iconOp: 'brush',
      linkOp: 'https://github.com/GuillermoGodoy05/FrontendSistemaVentas',


    },
    { name: 'React' },
    { name: 'Kotlin' },

  ];


}
