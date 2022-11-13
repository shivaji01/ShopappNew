import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from './authentication-service.service';
import { LoginForm } from './login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
loginForm:LoginForm=new LoginForm();
  constructor(private authSvc:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.loginForm=this.authSvc.getloginform();
  }


}
