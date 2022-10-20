import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
add: any;
name : string = '';
description: string = '';
group: Array<any>= [];

  constructor(private router : Router, private httpService: HttpService) { }

  ngOnInit(): void {
    this.listarGroup();
  }
  async Addgroup(){
    console.log("Aqui");
    this.group= await this.httpService.post('group', { description: this.description});
    
     /* 
       console.log("Aqui");
       this.httpclient.post('http://localhost:3007/group', { description : this.description}, ).toPromise().then((response : any)=> {
       console.log(response);
    */
        
      

    //})

  }
  async listarGroup(){
    console.log("Aqui2");
    this.group= await this.httpService.get('group');
    

  }

}
