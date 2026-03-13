import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrivacyDialog } from '../components/privacy-dialog/privacy-dialog';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Output() navigate = new EventEmitter<number>();

  constructor(private dialog: MatDialog) {}

  onNavigate(index: number) {
    this.navigate.emit(index);
  }

 openPrivacyPolicy() {
    this.dialog.open(PrivacyDialog, {
      width: '600px',
      data: { title: 'Política de Privacidad' }
    });
  }

}
