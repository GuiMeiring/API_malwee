import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-add-subgroup',
  templateUrl: './modal-add-subgroup.component.html',
  styleUrls: ['./modal-add-subgroup.component.scss']
})
export class ModalAddSubgroupComponent implements OnInit {
  description: string = '';
  idGroup: number | undefined;
  subGroup: Array<any>= [];
  group: Array<any>= [];

  constructor(public dialogRef: MatDialogRef<ModalAddSubgroupComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async getGroup(){
    this.group= await this.httpService.get(`group/${this.idGroup}`);
    console.log(this.group);

  }
  async subGroupAdd(){
    console.log(this.description);
    this.subGroup= await this.httpService.post('subgroup', { description: this.description, fkGroup: this.idGroup});
    this.onNoClick();
  }

}
