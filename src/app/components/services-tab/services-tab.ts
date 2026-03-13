import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-tab',
  imports: [CommonModule],
  templateUrl: './services-tab.html',
  styleUrl: './services-tab.css',
})
export class ServicesTab {
  showTools: string | null = null;

}
