import { Component, OnInit } from '@angular/core';
import { Relatorio } from 'src/app/model/relatorio';
import { RelatorioService } from 'src/app/service/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  relatorio1 = new Array<Relatorio>();
  columns = ['id_venda', 'nome', 'id_item', 'nomeItem', 'valor', 'quantidade']

  constructor(private relatorioService: RelatorioService ) { }

  ngOnInit(): void {
    this.relatorio();
  }

  relatorio(){
    this.relatorioService.relatorio1().subscribe(relatorio =>{
      this.relatorio1 = relatorio;
    })
  }

}
