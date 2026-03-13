import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // 📌 Importa el locale francés
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialog } from '../../error-dialog/error-dialog';

import { AccueilTab } from '../../components/accueil-tab/accueil-tab';
import { ComputechTab } from '../../components/computech-tab/computech-tab';
import { BureautiqueTab } from '../../components/bureautique-tab/bureautique-tab';
import { ContactTab } from '../../components/contact-tab/contact-tab';
import { EncaissementTab } from '../../components/encaissement-tab/encaissement-tab';
import { InformatiqueTab } from '../../components/informatique-tab/informatique-tab';
import { ServicesTab } from '../../components/services-tab/services-tab';

// Registrar el locale francés
registerLocaleData(localeFr);
ContactTab
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatToolbarModule,MatIconModule,MatExpansionModule,MatSnackBarModule,
    AccueilTab,ComputechTab,BureautiqueTab,ContactTab,EncaissementTab,InformatiqueTab,ServicesTab
  ],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent {
  showMaterial: boolean = false;
  showBureautiqueOption: string | null = null;
  today: Date = new Date();
  showTools: 'ip' | 'browser' | null = null;

  constructor(private titleService: Title,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    // Actualiza la fecha cada minuto para que el reloj no se quede estático
    setInterval(() => {
      this.today = new Date();
    }, 60000);




  }

  login() {
  console.log('Botón presionado');
  const esError = true;

  if (esError) {
    // 📌 Cambia el snackBar por el diálogo
    this.dialog.open(ErrorDialog, {
      width: '300px',
    });
  }
    }


changeTitle(label: string) {
    // Esto cambiará el texto de la pestaña del navegador
    this.titleService.setTitle(`CFI - ${label}`);
  }

ngOnInit() {
  this.titleService.setTitle('CFI - Accueil');
}


menuOpen: string = '';
computexSection: string = 'accueil';
errorLogin = true;

}

