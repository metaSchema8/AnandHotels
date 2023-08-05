import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  user = {
    userName : "",
    password : ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(form : any){
    if(form.valid){
      alert("You Signed In");
    }
  }

}
