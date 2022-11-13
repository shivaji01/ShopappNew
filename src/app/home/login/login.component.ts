import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:any;
loginDetails: LoginForm=new LoginForm();

  constructor(private authSvc:AuthenticationServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formvalue:any)
  {
    this.authSvc.setloginform(this.loginDetails)
    this.router.navigate(['home']);
console.log(formvalue)
  }

  
}
export class LoginForm{
loginId:string="";
password:string="";
}