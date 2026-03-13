import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-privacy-dialog',
 standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './privacy-dialog.html',
  styleUrl: './privacy-dialog.css',
})
export class PrivacyDialog {

}
