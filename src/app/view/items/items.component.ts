import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { Items } from 'src/app/model/items';
import { Venda } from 'src/app/model/venda';
import { IdItemService } from 'src/app/service/id-item.service';
import { ItemService } from 'src/app/service/item.service';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { ConfirmationVo } from '../dialogs/confirm/confirmation-vo';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = new Array<Items>();
  columns = ['nomeItem', 'nomeJogo', 'valor', 'actions'];

  selectedItem?: Items = undefined;
  inserting = false;


  constructor( private itemsService: ItemService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public idItemService: IdItemService) {

     }

  ngOnInit(): void {
    this.listar();
  }

  showSnackbar(msg: string): void{
    this.snackBar.open(msg, '', {duration:3000});
  }

  passarIdItem(id:number){
    this.idItemService.idItemServico = id;
  }

  listar():void{
    this.itemsService.listar().subscribe(items =>{
      this.items = items;
    })
  }

  select(item:Items){
    this.inserting = false;
    this.selectedItem = item;
  }

  cancelar(){
    this.selectedItem = undefined;
  }

  salvar(){
    if(this.inserting){
      this.itemsService.inserir(this.selectedItem).subscribe(() =>{
        this.listar();
        this.cancelar()
      })

    }else{
      this.itemsService.atualizar(this.selectedItem).subscribe(() =>{
        this.listar();
        this.cancelar();
        this.showSnackbar('Item Atualizado')
      })
    }
  }

  criar(){
    this.inserting = true;
    this.selectedItem = new Items;
  }

  confirmar(removeId?: number){
    const result = this.dialog.open(ConfirmComponent, {
      width:'300px',
      data: {
        id: removeId,
        answer:false
      }
    });

    result.afterClosed().subscribe((confirmationVo : ConfirmationVo) => {
      if(confirmationVo && confirmationVo.answer && confirmationVo.id){
        this.remover(confirmationVo.id);

      }
    });
  }

  remover(id?: number){
    if(!id){return };
    this.itemsService.excluir(id).subscribe(() => {
      this.listar();
    })
  }

}
