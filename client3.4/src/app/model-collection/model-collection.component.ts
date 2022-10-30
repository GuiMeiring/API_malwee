import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-model-collection',
  templateUrl: './model-collection.component.html',
  styleUrls: ['./model-collection.component.scss']
})
export class ModelCollectionComponent implements OnInit {
description: string ='';
collection: Array<any>= [];
id : number | undefined;



  constructor(public dialogRef: MatDialogRef<ModelCollectionComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : {idGrupo: number, descricao : string, status : number}) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async collectionAdd(){
    console.log(this.description);
    this.collection= await this.httpService.post('collection', { description: this.description});
    this.onNoClick();
  }
  async getCollection(){
    console.log(this.id);
    this.collection= await this.httpService.get(`collection/${this.id}`);
    console.log(this.collection);

  }
  async collectionEdit(){
    console.log(this.id);
    console.log(this.description)
    this.collection= await this.httpService.put(`collection`,{description:this.description, id : this.id});
    console.log(this.collection);
    this.collection= await this.httpService.get(`collection/${this.id}`);
    this.onNoClick();
  }
  async collectionDelete(){
    console.log(this.id);
    this.collection= await this.httpService.patch(`collection/${this.id}`,{});
    this.onNoClick();
  }


}
