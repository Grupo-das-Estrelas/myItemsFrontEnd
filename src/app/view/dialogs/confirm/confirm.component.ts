import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationVo } from './confirmation-vo';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent   {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationVo) { }

    clickYes(){
      this.data.answer = true;
      this.dialogRef.close(this.data);
    }

    clickNo(){
      this.data.answer = false;
      this.dialogRef.close(this.data);
    }
}
