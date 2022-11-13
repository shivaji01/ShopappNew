import { Component } from '@angular/core';
import { EmpServiceService } from './emp-service.service';
import { Employee } from './employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AmolSirSessions';
  empsevice:any;
  employeeDetails:Employee[]=[];
  constructor(){
    this.empsevice=new EmpServiceService();
  }

  ngOninit()
  {
    this.employeeDetails=this.empsevice.getEmployes();

  }
}
