import { Component, OnInit } from '@angular/core';
import { VendaService } from 'src/app/service/venda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Venda } from 'src/app/model/venda';
import { IdItemService } from 'src/app/service/id-item.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  vendas = new Array<Venda>();
  selectedVenda?= new Venda();
  inserting = false;
  columns = ['id_venda', 'id_usuario', 'id_item', 'id_pagamento', 'quantidade'];



  constructor(private vendaService: VendaService, private snackBar: MatSnackBar,
    public idItemService: IdItemService) { }

  ngOnInit(): void {
    this.listar();
    if(this.selectedVenda){
      this.selectedVenda.id_item = this.idItemService.idItemServico;
    }


  }


  showSnackbar(msg: string): void{
    this.snackBar.open(msg, '', {duration:3000});
  }

  listar():void{
    this.vendaService.listar().subscribe(vendas =>{
      this.vendas = vendas;
    })
  }

  select(venda:Venda){
    this.selectedVenda = venda;
  }

  salvar(){
    if(!this.idItemService.idItemServico){
      // this.selectedVenda = venda;
    }
    this.vendaService.inserir(this.selectedVenda).subscribe(() =>{
      this.listar();
      this.cancelar();
    })
  }

  criar(){
    this.inserting = true;
    this.selectedVenda = new Venda;
  }

  cancelar(){
    this.selectedVenda = undefined;
  }


}
