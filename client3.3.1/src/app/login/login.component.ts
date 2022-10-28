import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string = 'teste';
  password : string = 'teste123';
  hide : boolean = true;

  constructor(private router : Router, private httpclient : HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('');
    this.httpclient.post('http://localhost:3007/logon', {username : this.username, password : this.password}).toPromise().then((response : any)=> {
      console.log(response.token);
      if(response.token != null){
        window.localStorage.setItem('token', response.token);
        console.log("Logado");
        this.router.navigateByUrl('');

      }

    })
  }
}
