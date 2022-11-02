import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModelCollectionComponent } from '../model-collection/model-collection.component';
import { ModalAddCollectionComponent } from '../modal-add-collection/modal-add-collection.component';

export interface DialogDataCollection {
  collection: any;
  id: number;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  add: any;
  collection: Array<any>= [];
  search: string='';


    constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }


    ngOnInit(): void {
      this.listarCollection();
    }

    postCollectionModal(): void {
      const ref = this.dialog.open(ModalAddCollectionComponent, {
        width: '600px',

      });
      ref.afterClosed().subscribe(result => {
        this.listarCollection();
      })
    }
    editCollectionModal(collection: any, id:any) {
      console.log(id);
      const ref = this.dialog.open(ModelCollectionComponent, {
        width: '600px',
        data: {collection: collection, id : id}

      });
      ref.afterClosed().subscribe(result => {
        this.listarCollection();
      })
      }


    async listarCollection(){
      this.collection= await this.httpService.get('collection');


    }

}
