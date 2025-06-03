import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() scrollToSection = new EventEmitter<string>();
  isDarkMode = false;

  onClick(sectionId: string): void {
    this.scrollToSection.emit(sectionId);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    const body = document.body;
    if (this.isDarkMode) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

}
