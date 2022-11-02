import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-add-products',
  templateUrl: './modal-add-products.component.html',
  styleUrls: ['./modal-add-products.component.scss']
})
export class ModalAddProductsComponent implements OnInit {
products: Array <any>=[];
fkGroup:number| undefined;
  group : Array <any>=[];
  subgroup: Array <any>=[];
  fkSubgroup: number | undefined;
  collection : Array <any>=[];
  fkCollection: number | undefined;
  description: string | undefined;
  salePrice: number | undefined;
  card: number=0;


  constructor(public dialogRef: MatDialogRef<ModalAddProductsComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
    this.card=1;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }



  async getGroup(){
    this.group= await this.httpService.get(`group/${this.fkGroup}`);
    this.card=2;

  }
  async getSubgroup(){
    this.subgroup= await this.httpService.get(`subgroup/${this.fkSubgroup}`);
    this.card=3;

  }
  async getCollection(){
    this.collection= await this.httpService.get(`collection/${this.fkCollection}`);
    this.card=4;

  }
  async addProducts(){
    this.products= await this.httpService.post('products/',{description: this.description, fkGroup: this.fkGroup, fkSubGroup: this.fkSubgroup, fkCollection: this.fkCollection, salePrice: this.salePrice});

  }

}
