import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { Footer } from './footer/footer';
import { MatTabsModule } from '@angular/material/tabs'; // Asegúrate de tener esto
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MenuBarComponent,
    Footer,
    MatTabsModule


  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'CFI-M';
 today: Date = new Date();
 selectedIndex = 0;


onFooterNavigate(index: number) {
  this.selectedIndex = index;
}

}

