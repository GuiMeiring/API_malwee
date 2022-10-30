import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalSubgroupComponent } from '../modal-subgroup/modal-subgroup.component';
import { ModelCollectionComponent } from '../model-collection/model-collection.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  edit: any;
  collection: Array<any>= [];
  search: string='';
  id: any;
  
  
    constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }
  
  
    ngOnInit(): void {
      this.listarCollection();
    }
    
    openPostModal(): void {
      const ref = this.dialog.open(ModelCollectionComponent, {
        width: '550px',
      });
      ref.afterClosed().subscribe(result => {
        this.listarCollection();
      })
    }
  
    
    async listarCollection(){
      this.collection= await this.httpService.get('collection');
  
  
    }

}
