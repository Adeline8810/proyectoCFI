import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-informatique-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informatique-tab.html',
  styleUrl: './informatique-tab.css',
})
export class InformatiqueTab {
  @Output() titleChanged = new EventEmitter<string>();
 showMaterial: boolean = false;
}
