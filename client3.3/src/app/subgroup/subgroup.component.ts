import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
  add: any;
  edit: any;
  name : string = '';
  nameProduct: string = '';
  description: string ='';
  id : number | undefined;
  subgroup: Array<any>= [];
  group: Array<any>= [];
  htmladd: number =0;
  search: string='';
  groupedit: Array<any>= [];
  delete: any;
  
  
    constructor(private router : Router, private httpService: HttpService) { }
  
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
    async getGroup(){
      console.log(this.id);
      this.group= await this.httpService.get(`group/${this.id}`);
      console.log(this.group);
  
    }
    public htmlEdit(){
      console.log("Aqui3")
      this.htmladd= 3;
    
    }
    deleteGroup(){
      console.log("Aqui4")
      this.htmladd= 4;
    }
    async groupAdd(){
      
      console.log("Aqui");
      console.log(this.description);
      this.subgroup= await this.httpService.post('subgroup', { description: this.description});
      
  
    }
    async listarGroup(){
      this.group= await this.httpService.get('subgroup');
      
  
    }
   
    async groupEdit(){
      console.log(this.id);
      this.group= await this.httpService.put(`group`,{nameProduct:this.nameProduct, id : this.id});
      console.log(this.group);
      this.group= await this.httpService.get(`group/${this.id}`);
  
      
  
    }
    async groupDelete(){
      console.log(this.id);
      this.group= await this.httpService.patch(`group/${this.id}`,{});
    }

}
