import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-add-group',
  templateUrl: './modal-add-group.component.html',
  styleUrls: ['./modal-add-group.component.scss']
})
export class ModalAddGroupComponent implements OnInit {

  description: string = '';
  id : number =0;
  group: Array<any>= [];
  constructor(public dialogRef: MatDialogRef<ModalAddGroupComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  async groupAdd(){
    this.group= await this.httpService.post('group', { description: this.description});
    this.dialogRef.close();


  }

}
