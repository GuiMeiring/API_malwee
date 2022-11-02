import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogDataProducts {
  products :Array <any>;
  id: number;
  description: string;
  salePrice:number;
  fkGroup: number;
  fkSubgroup: number;
  fkCollection: number;
}

@Component({
  selector: 'app-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrls: ['./modal-products.component.scss']
})
export class ModalProductsComponent implements OnInit {
  products: Array <any>=[];
  group: Array <any>=[];
  subgroup: Array <any>=[];
  collection: Array <any>=[];
  description: string ='';
  salePrice: number | undefined;

  constructor(public dialogRef: MatDialogRef<ModalProductsComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data :DialogDataProducts ) { }

  ngOnInit(): void {
    this.products.push(this.data.products);
    this.getGroup();
    this.getSubgroup();
    this.getCollection();
  }
  async getGroup(){
    this.group= await this.httpService.get(`group/${this.data.fkGroup}`);

  }
  async getSubgroup(){
    this.subgroup= await this.httpService.get(`subgroup/${this.data.fkSubgroup}`);

  }
  async getCollection(){
    this.collection= await this.httpService.get(`collection/${this.data.fkCollection}`);

  }
  async productEdit(){
    this.products= await this.httpService.put('products',{id: this.data.id,description: this.description, salePrice: this.salePrice});
    this.onNoClick();
    
  }
  async productDelete(){
    this.products= await this.httpService.patch(`products/${this.data.id}`,{});
    this.onNoClick();
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
