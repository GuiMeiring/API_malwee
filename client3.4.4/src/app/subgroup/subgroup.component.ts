import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalSubgroupComponent } from '../modal-subgroup/modal-subgroup.component';
import { ModalAddSubgroupComponent } from '../modal-add-subgroup/modal-add-subgroup.component';
export interface DialogDataSubGroup {
  descripition: string;
  id: number;
  fkGroup:number;
}

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
edit: any;
subGroup: Array<any>= [];
search: string='';
id: number=0;
description: string='';
fkGroup:number=0;


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }


  ngOnInit(): void {
    this.listarSubgroup();
  }

  EditSubgroupModal(): void {
    const ref = this.dialog.open(ModalSubgroupComponent, {
      width: '550px',
      data:{id:this.id, description: this.description, fkGroup: this.fkGroup}
    });
    ref.afterClosed().subscribe(result => {
      this.listarSubgroup();
    })
  }
  PostSubgroupModal(): void {
    const ref = this.dialog.open(ModalAddSubgroupComponent, {
      width: '550px',
    });
    ref.afterClosed().subscribe(result => {
      this.listarSubgroup();
    })
  }


  async listarSubgroup(){
    this.subGroup= await this.httpService.get('subgroup');


  }
  EditSubgroup(id:any,description:any,fkGroup:any){
    this.id=id;
    this.description=description;
    this.fkGroup=fkGroup;
    this.EditSubgroupModal();



  }

}
