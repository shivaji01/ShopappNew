import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginSvcService } from '../../coredata/login-svc.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
signInform!:FormGroup;
  constructor(private fb:FormBuilder, private loginSvc:LoginSvcService) { }

  ngOnInit(): void {
this.createLoginform();

  }
  createLoginform(){
      this.signInform=this.fb.group({
        "email": ['', Validators.required],
        "password": ['', Validators.required]
      })
}

signin(){
    if(this.signInform.valid){
        this.loginSvc.authLogin(this.signInform.value).subscribe(el=>{
          if(Array.isArray(el) && el.length>0){
            let user=el[0];
            user['token']="ljljhhOHGSIYBijipdpsfs8rjttn98";
            localStorage.setItem('usertoken',user);
          }
          else{
            //this.toster.error("user doesn't exist or is invalid ")
          }
          // console.log(el);
          //  alert("login success"+el); 
        },error=>{
          console.log(error);

        })
    }
}
}
