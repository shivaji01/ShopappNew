import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginshopModule } from '../loginshop/loginshop.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginshopModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class ShareddataModule { }
