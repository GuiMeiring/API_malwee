import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogData {
  grupo: string;
  id: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  description: string = '';
  id : number | undefined;
  group: Array<any>= [];
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : {idGrupo: number, descricao : string, status : number}) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  async getGroup(){
    console.log(this.id);
    this.group= await this.httpService.get(`group/${this.id}`);
    console.log(this.group);
    this.onNoClick();

  }
  async groupAdd(){

    console.log("Aqui");
    console.log(this.description);
    this.group= await this.httpService.post('group', { description: this.description});
    this.onNoClick();


  }
  async groupEdit(){
    console.log(this.id);
    this.group= await this.httpService.put(`group`,{description:this.description, id : this.id});
    console.log(this.group);
    this.group= await this.httpService.get(`group/${this.id}`);
    this.onNoClick();
  }
  async groupDelete(){
    console.log(this.id);
    this.group= await this.httpService.patch(`group/${this.id}`,{});
    this.onNoClick();
  }


}
