import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [
    MatGridListModule,
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  technologies = [
    { name: 'C#' },
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Kotlin' },
    { name: 'Git' },
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'SQL Server' },
    { name: '.NET Core' },
    { name: 'MERN Stack' },
    { name: 'Azure DevOps' }
  ];

}
