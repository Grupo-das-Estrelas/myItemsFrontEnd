import { Component, OnInit } from '@angular/core';
import { Relatorio2 } from 'src/app/model/relatorio2';
import { RelatorioService } from 'src/app/service/relatorio.service';

@Component({
  selector: 'app-relatorio2',
  templateUrl: './relatorio2.component.html',
  styleUrls: ['./relatorio2.component.css']
})
export class Relatorio2Component implements OnInit {

  relatorio = new Array<Relatorio2>();
  columns = ['nomeItem', 'valor' ]

  constructor(private relatorioService: RelatorioService) { }

  ngOnInit(): void {
    this.relatorio2();
  }

  relatorio2(){
    this.relatorioService.relatorio2().subscribe(relatorio2 =>{
      this.relatorio = relatorio2;
    })
  }

}
