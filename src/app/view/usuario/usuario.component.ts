import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { ConfirmationVo } from '../dialogs/confirm/confirmation-vo';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios = new Array<Usuario>();
  columns = ['nome', 'saldo', 'actions'];

  selectedUser?: Usuario = undefined;
  inserting = false;

  constructor(private usuarioService: UsuarioService,
     private snackBar: MatSnackBar,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }

  showSnackbar(msg: string): void{
    this.snackBar.open(msg, '', {duration:3000});
  }

  listar():void{
    this.usuarioService.listar().subscribe(usuarios =>{
      this.usuarios = usuarios;
    })
  }

  select(usuario:Usuario){
    this.inserting = false;
    this.selectedUser = usuario;
  }

  cancelar(){
    this.selectedUser = undefined;
  }

  salvar(){
    if(this.inserting){
      this.usuarioService.inserir(this.selectedUser).subscribe(() =>{
        this.listar();
        this.cancelar()
      })

    }else{
      this.usuarioService.atualizar(this.selectedUser).subscribe(() =>{
        this.listar();
        this.cancelar();
        this.showSnackbar('Usuario Atualizado');
      })
    }
  }

  criar(){
    this.inserting = true;
    this.selectedUser = new Usuario;
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
        this.remover(confirmationVo.id)
      }
    });
  }

  remover(id?: number){
    if(!id){return };
    this.usuarioService.excluir(id).subscribe(() => {
      this.listar();
    })
  }

}
