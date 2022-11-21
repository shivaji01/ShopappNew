import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginshopRoutingModule } from './loginshop-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginshopRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  exports:[
    SigninComponent,
    SignupComponent
  ]
})
export class LoginshopModule { }
