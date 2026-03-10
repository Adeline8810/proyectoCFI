import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'; // Necesario para las etiquetas del diálogo
import { MatButtonModule } from '@angular/material/button'; // Necesario para el botón

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './error-dialog.html', // Asegúrate de que este nombre coincida con tu archivo .html
  styleUrls: ['./error-dialog.css']
})
export class ErrorDialog {

}
