import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { ItemsComponent } from './view/items/items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar'
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './view/dialogs/confirm/confirm.component';
import { VendaComponent } from './view/venda/venda.component';
import { PagamentoComponent } from './view/pagamento/pagamento.component';
import { RelatorioComponent } from './view/relatorio/relatorio.component';
import { Relatorio2Component } from './view/relatorio2/relatorio2.component';
import { RelatoriosComponent } from './view/relatorios/relatorios.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ItemsComponent,
    ConfirmComponent,
    VendaComponent,
    PagamentoComponent,
    RelatorioComponent,
    Relatorio2Component,
    RelatoriosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSortModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
