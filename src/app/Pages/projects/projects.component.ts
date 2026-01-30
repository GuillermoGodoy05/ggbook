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
      name: 'API Sistema Ventas',
      description: 'Api Sist Venta',

      tech: ['.Net', 'React'],

      label2: 'Try',
      icon2: 'computer',
      link2: 'https://sistemaventasportfolio.netlify.app/',

      label3: 'Back',
      icon3: 'code',
      link3: 'https://github.com/GuillermoGodoy05/BackendSistemaVenta',

      labelOp: 'Front',
      iconOp: 'brush',
      linkOp: 'https://github.com/GuillermoGodoy05/FrontendSistemaVentas',


    },
    {
      name: 'Wedding App',
      description: 'Angular app con ayuda de IA y Supabase',

      tech: ['Angular', 'Supabase', 'n8n'],

      label2: 'Try',
      icon2: 'computer',
      link2: 'https://casamientoevent.netlify.app/',
    },
    {
      name: 'Sipmar Page',
      description: 'Wordpress page',

      tech: ['Wordpress', 'Blocksy'],

      label2: 'Try',
      icon2: 'computer',
      link2: 'https://sipmar.com/',
    },
    {
      name: 'My Finance',
      description: 'Aplication about personal finance',

      tech: ['.Net', 'React'],

      label2: 'Try',
      icon2: 'computer',
      link2: 'https://matesoft-myfinances.netlify.app/',

      label3: 'Front Git',
      icon3: 'code',
      link3: 'https://github.com/GuillermoGodoy05'
    },
    {
      name: 'Kotlin Front App',
      description: 'App about Christmas recipes',

      tech: ['Kotlin', 'Android Studio'],

      label2: 'GitHub',
      icon2: 'code',
      link2: 'https://github.com/GuillermoGodoy05/GodoyGuillermoFinalTAP'

    },
    {
      name: 'Criptomonedas',
      description: 'Cripto app + API',

      tech: ['React', 'Styled Components', 'API'],

      label2: 'Try',
      icon2: 'computer',
      link2: 'https://criptomonedas-api-styled.netlify.app/',

      label3: 'Git',
      icon3: 'code',
      link3: 'https://github.com/GuillermoGodoy05/Conversor-de-Criptomonedas'
    },


  ];


}
