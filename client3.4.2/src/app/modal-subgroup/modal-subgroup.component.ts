import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogDataSubGroup {
  description: string;
  id: number;
  fkGroup: number;
}
@Component({
  selector: 'app-modal-subgroup',
  templateUrl: './modal-subgroup.component.html',
  styleUrls: ['./modal-subgroup.component.scss']
})
export class ModalSubgroupComponent implements OnInit {
  description: string = '';
  id : number | undefined;
  idGroup: number | undefined;
  subGroup: Array<any>= [];
  group: Array<any>= [];
  constructor(public dialogRef: MatDialogRef<ModalSubgroupComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataSubGroup) { }

  ngOnInit(): void {
    this.getSubgroup();
    this.getGroup();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async getGroup(){
    console.log(this.id);
    this.group= await this.httpService.get(`group/${this.data.fkGroup}`);
    console.log(this.group);

  }
  async subGroupAdd(){
    console.log(this.data.id);
    this.subGroup= await this.httpService.post('subgroup', { description: this.description, fkGroup: this.idGroup});
    this.onNoClick();
  }
  async getSubgroup(){
    console.log(this.data.description);
    console.log(this.data.id);
    console.log(this.data.fkGroup);
    this.subGroup= await this.httpService.get(`subgroup/${this.data.id}`);
    console.log(this.subGroup);

  }
  async subgroupEdit(){
    console.log(this.data.id);
    console.log(this.data.description);
    console.log(this.data.fkGroup);
    this.subGroup= await this.httpService.put(`subgroup`,{description:this.description, id : this.data.id});
    console.log(this.subGroup);
    this.subGroup= await this.httpService.get(`subGroup/${this.data.id}`);
    this.onNoClick();
  }
  async subgroupDelete(){
    console.log(this.id);
    this.group= await this.httpService.patch(`subgroup/${this.data.id}`,{});
    this.onNoClick();
  }

}
