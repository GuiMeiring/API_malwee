import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from 'src/services/HttpService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { ModalAddGroupComponent } from '../modal-add-group/modal-add-group.component';

export interface DialogData {
  descripition: string;
  id: number;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

add: any;
edit: any;
name : string = '';
description: string = '';
id : number =0;
group: Array<any>= [];
htmladd: number =0;
search: string='';
groupedit: Array<any>= [];
delete: any;
grupo: string='';


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }


  ngOnInit(): void {
    this.listarGroup();
    this.htmladd=1;
  }
  async htmlAdd(){
    this.htmladd=2;
    /*console.log("Aqui");
    this.group= await this.httpService.post('group', { description: this.description});
    /*
       console.log("Aqui");
       this.httpclient.post('http://localhost:3007/group', { description : this.description}, ).toPromise().then((response : any)=> {
       console.log(response);
    */
    //})

  }
  openEditModal(): void {
    console.log(this.id);
    const ref = this.dialog.open(ModalComponent, {
      width: '600px',
      data: {description: this.description, id : this.id}
    });
    ref.afterClosed().subscribe(result => {
      this.listarGroup();
    })
  }
  openPostModal(): void {
    const ref = this.dialog.open(ModalAddGroupComponent, {
      width: '600px'
    });
    ref.afterClosed().subscribe(result => {
      this.listarGroup();
    })
  }

  public htmlEdit(){
    this.htmladd= 3;

  }
  deleteGroup(){
    this.htmladd= 4;
  }

  async cancelar(){
    this.htmladd=1;
    this.group= await this.httpService.get('group');
  }
  async getGroup(){
    console.log(this.id);
    this.group= await this.httpService.get(`group/${this.id}`);
    console.log(this.group);

  }
  async groupAdd(){
    this.id=1;

    console.log("Aqui");
    console.log(this.description);
    this.group= await this.httpService.post('group', { description: this.description});


  }
  async listarGroup(){
    console.log("Aqui2");
    this.group= await this.httpService.get('group');


  }

  async groupEdit(){
    console.log(this.id);
    this.group= await this.httpService.put(`group`,{description:this.description, id : this.id});
    console.log(this.group);
    this.group= await this.httpService.get(`group/${this.id}`);




  }
  async groupDelete(){
    console.log(this.id);
    this.group= await this.httpService.patch(`group/${this.id}`,{});
  }
  public modalEditar(id : any, description: any){
    this.id=id;
    this.description=description;
    this.openEditModal();

    
    };
}
