import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bureautique-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bureautique-tab.html',
  styleUrl: './bureautique-tab.css',
})
export class BureautiqueTab {
showBureautiqueOption: string | null = null;
// Crea el emisor
  @Output() titleChanged = new EventEmitter<string>();

  // Crea una función que emita el nuevo título
  updateTitle(newTitle: string) {
    this.titleChanged.emit(newTitle);
  }
}
