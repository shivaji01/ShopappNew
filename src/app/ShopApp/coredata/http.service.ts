import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
BaseUrl: string = environment.baseUrl;
  HttpHeadersOPtions={
          "headers":new HttpHeaders()
          .set('Content-Type',"application/json")
          //.set('Content-Type',"application/x-www-form-urlencoded")
          .set("allow-all-origin","*")
  }
  constructor( private http:HttpClient) {

   }

   getFromApi(endpoint: string, params: HttpParams= new HttpParams()){
      const url= this.BaseUrl+endpoint;
      return this.http.get<any>(url, {params});
   }

   postData(endpoint: string, data:any){
    const url= this.BaseUrl+endpoint;
    return this.http.post<any>(url,data, this.HttpHeadersOPtions);
    
   }


}
