import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginSvcService } from '../../coredata/login-svc.service';
import { passwdmismatch } from '../../shareddata/validators/custom.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
@Input() ActionName: string='';

//to move signup to sign in component when user clicks onsubmit button
@Output() SignUpCompleted = new EventEmitter<boolean>(false);
  constructor(private fb:FormBuilder, private loginSvc:LoginSvcService) { }
signupForm!:FormGroup;
  ngOnInit(): void {
this.createformStructure();
  }

  ngafterViewInit() {
    console.log('ActionName',this.ActionName);
  }

  //structure of form using formbuilder: FormBuilder  
createformStructure(){
this.signupForm = this.fb.group({
  "firstname": ['', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
  "lastname": ['', [Validators.required]],
  "email": ['', [Validators.required]],
  "password": ['', [Validators.required]],
  "confirmPassword": ['', [Validators.required]],
  "mobile": ['', [Validators.required]],
  "DOB": ['', []],
  "informaccept":[false,[Validators.required]],
  "address": this.fb.group({ 
      "line1":['', []],
      "line2":['', []],
      "city": ['', []],
      "State": ['', []],
      "pincode": ['', []],
  })
}, {validator:passwdmismatch})
}

  showpage={
    "firstname":"",
    "lastname":"",
    "email":"",
    "password":"",
    "confirmPassword":"",
    "mobile":null,
    "DOB":"",
    "address":{
      "line1":"",
      "line2":"",
      "city":"",
      "State":"",
      "pincode":null,
    }
  }


  formsubmit(){
    if(this.signupForm.valid){
    this.loginSvc.registeredUser(this.signupForm.value).subscribe(data=>{
      console.log(data);
      this.SignUpCompleted.emit(true);//to move to sign in component
    })
  }
    console.log("form values", this.signupForm);
  }
}
