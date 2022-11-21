import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
LoginactionType:string = "signIn";
  constructor() { }

  ngOnInit(): void {
  }
  handlesignUp(){
    this.LoginactionType='signUp' ;   
  }

  SignupHandler(event:boolean){
      //alert("login done!"+event);
      if(event){
        this.LoginactionType='signIn';
      }
  }
}
