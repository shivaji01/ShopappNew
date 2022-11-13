import { Injectable } from '@angular/core';
import { LoginForm } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  
loginForm:LoginForm=new LoginForm();
  constructor() {
    console.log("athentication are initialized");
   }

setloginform(loginForm:LoginForm)
{
  this.loginForm=loginForm;
}

getloginform()
{
  return this.loginForm;
}
}
