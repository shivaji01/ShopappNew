

export class EmpServiceService {
  employeeDetails: any[] = [];
  Employee: any;
  constructor() { }
  getEmployes()
  {
    console.log("hello")
    this.employeeDetails=[
      new this.Employee("emp1", "shivaji","devloper"),
      new this.Employee("emp2", "Sagar","devloper"),
      new this.Employee("emp3", "Bhavesh","devloper")
    ]
    return this.employeeDetails;
  }
}
