import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';

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
id : number=0;
group: Array<any>= [];
htmladd: string ='';
search: string='';
htmledit: string='';
delete: any;


  constructor(private router : Router, private httpService: HttpService) { }

  ngOnInit(): void {
    this.listarGroup();
    this.htmladd='false';
    this.htmledit='false';
  }
  async htmlAdd(){
    this.htmladd='true';
    /*console.log("Aqui");
    this.group= await this.httpService.post('group', { description: this.description});
    
     /* 
       console.log("Aqui");
       this.httpclient.post('http://localhost:3007/group', { description : this.description}, ).toPromise().then((response : any)=> {
       console.log(response);
    */
        
      

    //})

  }
  public htmlEdit(){
    console.log("Aqui3")
    this.htmledit='true';
  
  }
  async groupAdd(){
    
    console.log("Aqui");
    console.log(this.description);
    this.group= await this.httpService.post('group', { description: this.description});

  }
  async listarGroup(){
    console.log("Aqui2");
    this.group= await this.httpService.get('group');
    

  }
 
  async groupEdit(){
    this.group= await this.httpService.patch('group', { id: this.id});

  }
}
