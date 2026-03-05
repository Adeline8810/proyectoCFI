import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // 📌 Importa el locale francés
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';

// Registrar el locale francés
registerLocaleData(localeFr);

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatToolbarModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent {
  showMaterial: boolean = false;
  showBureautiqueOption: string | null = null;
  today: Date = new Date();
  showTools: 'ip' | 'browser' | null = null;

  constructor(private titleService: Title) {
    // Actualiza la fecha cada minuto para que el reloj no se quede estático
    setInterval(() => {
      this.today = new Date();
    }, 60000);
  }




changeTitle(tabName: string) {
  this.titleService.setTitle('CFI - ' + tabName);
}

ngOnInit() {
  this.titleService.setTitle('CFI - Accueil');
}


}
