import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ComputechCarouselDialogComponent } from '../computech-carousel-dialog/computech-carousel-dialog';

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

constructor(private dialog: MatDialog) {}

openCarousel(index: number) {
  this.dialog.open(ComputechCarouselDialogComponent, {
    width: '750px',
    data: { index: index } // Enviamos la posición al diálogo
  });
}

}



