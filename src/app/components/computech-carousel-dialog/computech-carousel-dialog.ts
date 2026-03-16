import { Component,Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-computech-carousel-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './computech-carousel-dialog.html',
  styleUrls: ['./computech-carousel-dialog.css']
})
export class ComputechCarouselDialogComponent {
  secciones = [
  'accueil',
  'personnel',
  'magasin',
  'materiel',
  'logiciel',
  'sav',
  'reseau',
  'pilotes',
  'utilitaires',
  'pros',
  'divers',
  'plan',
  'espace',
  'contact',
  'forum'
  ];

  indiceActual: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // Si data.index existe, empezamos ahí; si no, en 0 (Accueil)
    this.indiceActual = data.index || 0;
  }

  get seccionActual() {
    return this.secciones[this.indiceActual];
  }

  setStep(index: number) {
    this.indiceActual = index;
  }
}
