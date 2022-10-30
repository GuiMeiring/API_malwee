import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalSubgroupComponent } from '../modal-subgroup/modal-subgroup.component';

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
edit: any;
subGroup: Array<any>= [];
search: string='';
id: any;


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }


  ngOnInit(): void {
    this.listarSubgroup();
  }
  
  openPostModal(): void {
    const ref = this.dialog.open(ModalSubgroupComponent, {
      width: '550px',
    });
    ref.afterClosed().subscribe(result => {
      this.listarSubgroup();
    })
  }

  
  async listarSubgroup(){
    this.subGroup= await this.httpService.get('subgroup');


  }

}
