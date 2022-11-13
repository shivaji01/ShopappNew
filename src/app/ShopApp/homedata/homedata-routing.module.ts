import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomedataComponent } from './homedata.component';

const routes: Routes = [
  {path: '', component:HomedataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomedataRoutingModule { }
