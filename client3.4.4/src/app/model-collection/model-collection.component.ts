import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogDataCollection {
  collection: any;
  id: number;
}

@Component({
  selector: 'app-model-collection',
  templateUrl: './model-collection.component.html',
  styleUrls: ['./model-collection.component.scss']
})
export class ModelCollectionComponent implements OnInit {
description: string ='';
collection: Array<any>= [];



  constructor(public dialogRef: MatDialogRef<ModelCollectionComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataCollection) { }

  ngOnInit(): void {
    this.collection.push(this.data.collection);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async collectionEdit(){
    console.log(this.description)
    this.collection= await this.httpService.put(`collection`,{description:this.description, id : this.data.id});
    console.log(this.collection);
    this.collection= await this.httpService.get(`collection/${this.data.id}`);
    this.onNoClick();
  }
  async collectionDelete(){
    this.collection= await this.httpService.patch(`collection/${this.data.id}`,{});
    this.onNoClick();
  }


}
