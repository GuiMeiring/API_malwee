import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  search: string ='';
  user: Array<any>= [];
edit: any;


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  openPostModal(): void {
    const ref = this.dialog.open(ModalUserComponent, {
      width: '550px',
    });
    ref.afterClosed().subscribe(result => {
      this.listaUser();
    })
  }
  async listaUser(){
    this.user= await this.httpService.get('user');


  }


}
