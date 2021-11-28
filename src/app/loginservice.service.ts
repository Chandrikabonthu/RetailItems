import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  // constructor(private http: HttpClient) { }
  // login(UserName:string, Password:string ) {
  //   return this.http.get<User>('/api/login', {UserName, Password})
  //       // this is just the HTTP call, 
  //       // we still need to handle the reception of the token
  //    .subscribe();
  //}
}
