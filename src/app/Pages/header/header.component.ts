import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true, // necesario si estás usando componentes independientes (Angular >= 14)
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Evento que emite el id de la sección a la que se debe hacer scroll
  @Output() scrollToSection = new EventEmitter<string>();


  // Modo oscuro activado o no
  isDarkMode = false;

  // ViewChild nos da acceso directo al sidenav desde el template
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // Alterna entre abrir y cerrar el menú hamburguesa
  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  // Emite el evento con la sección correspondiente
  onClick(sectionId: string): void {
    this.scrollToSection.emit(sectionId);
  }

  // Cambia entre modo oscuro y claro agregando/removiendo clases al <body>
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    body.classList.toggle('dark-theme', this.isDarkMode);
    body.classList.toggle('light-theme', !this.isDarkMode);
  }

  
}
