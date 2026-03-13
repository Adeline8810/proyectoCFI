import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Output() navigate = new EventEmitter<number>();

  onNavigate(index: number) {
    this.navigate.emit(index);
  }
}
