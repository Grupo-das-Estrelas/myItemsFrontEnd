import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './view/items/items.component';
import { PagamentoComponent } from './view/pagamento/pagamento.component';
import { RelatorioComponent } from './view/relatorio/relatorio.component';
import { Relatorio2Component } from './view/relatorio2/relatorio2.component';
import { RelatoriosComponent } from './view/relatorios/relatorios.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { VendaComponent } from './view/venda/venda.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent
  },

  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'venda',
    component: VendaComponent
  },
  {
    path: 'pagamento',
    component: PagamentoComponent
  },
  {
    path: 'relatorio',
    component: RelatorioComponent
  },
  {
    path: 'relatorio2',
    component: Relatorio2Component
  },
  {
    path: 'relatorios',
    component: RelatoriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
