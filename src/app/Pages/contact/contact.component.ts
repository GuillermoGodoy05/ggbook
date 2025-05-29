import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    MatGridListModule,
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts = [
    { label: 'GitHub', icon: 'code', link: 'https://github.com/GuillermoGodoy05' },
    { label: 'LinkedIn', icon: 'work', link: 'https://www.linkedin.com/in/guillermogodoy05' },
    { label: 'Instagram', icon: 'photo_camera', link: 'https://instagram.com/guillermogodoy_' },
    { label: 'guillermo.rgo92@gmail.com', icon: 'email', link: null }
  ];
}
