import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-computech-tab',
  imports: [CommonModule,
    MatIconModule],
  templateUrl: './computech-tab.html',
  styleUrl: './computech-tab.css',
})
export class ComputechTab {
computexSection: string = 'accueil';
menuOpen: string = '';
}
