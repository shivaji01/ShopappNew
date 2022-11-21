import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginSvcService {

  constructor(private httpsvc:HttpService) { }

registeredUser(data:any){
  return this.httpsvc.postData('users', data)
}

authLogin(data:any){
  const params = new HttpParams()
                    .set('email', data.email)
                    .set('password',data.password)
  return this.httpsvc.getFromApi('users',params);
}

}
