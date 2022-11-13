import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomedataRoutingModule } from './homedata-routing.module';
import { HomedataComponent } from '../homedata/homedata.component';


@NgModule({
  declarations: [
    HomedataComponent
  ],
  imports: [
    CommonModule,
    HomedataRoutingModule
  ]
})
export class HomedataModule { }
