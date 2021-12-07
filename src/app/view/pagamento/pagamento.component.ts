import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pagamento } from 'src/app/model/pagamento';
import { PagamentoService } from 'src/app/service/pagamento.service';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { ConfirmationVo } from '../dialogs/confirm/confirmation-vo';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  pagamentos = new Array<Pagamento>();
  columns = ['idPagamento', 'tipoPagamento', 'actions']

  inserting = false;
  selectedPagamento? : Pagamento = undefined;

  constructor(private pagamentoService: PagamentoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.listar();
  }

  showSnackbar(msg: string): void{
    this.snackBar.open(msg, '', {duration:3000});
  }

  listar():void{
    this.pagamentoService.listar().subscribe(pagamentos =>{
      this.pagamentos = pagamentos;
    })
  }

  select(pagamento:Pagamento){
    this.inserting = false;
    this.selectedPagamento = pagamento;
  }

  cancelar(){
    this.selectedPagamento = undefined;
  }

  salvar(){
    if(this.inserting){
      this.pagamentoService.inserir(this.selectedPagamento).subscribe(() => {
        this.listar();
        this.cancelar();
      })
    }else{
      this.pagamentoService.atualizar(this.selectedPagamento).subscribe(() => {
        this.listar();
        this.cancelar();
        this.showSnackbar('Pagamento Atualizado');
      })
    }
  }

  criar(){
    this.inserting = true;
    this.selectedPagamento = new Pagamento;
  }

  confirmar(removeId?: number){
    const result = this.dialog.open(ConfirmComponent,{
      width:'300px',
      data:{
        id:removeId,
        answer:false
      }
    });

    result.afterClosed().subscribe((confirmationVo : ConfirmationVo) => {
      if(confirmationVo && confirmationVo.answer && confirmationVo.id){
        this.remover(confirmationVo.id);
      }
    })
  }

  remover(id?: number){
    if(!id){return };
      this.pagamentoService.excluir(id).subscribe(() => {
        this.listar();
      })
  }

}
