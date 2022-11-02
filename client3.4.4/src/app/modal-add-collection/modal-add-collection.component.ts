import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-add-collection',
  templateUrl: './modal-add-collection.component.html',
  styleUrls: ['./modal-add-collection.component.scss']
})
export class ModalAddCollectionComponent implements OnInit {
  collection : Array <any>=[];
  description: string ='';

  constructor(public dialogRef: MatDialogRef<ModalAddCollectionComponent>, private httpService : HttpService) { }

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

}
