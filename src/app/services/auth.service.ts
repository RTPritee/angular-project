import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  baseUrl = 'https://reqres.in/';
  isLoggedIn = false;

  login(email: any, password: any) {
    // console.log(email, password);
    return this.http.post<any>(this.baseUrl +
      "api/login", { "email": email, "password": password }).subscribe(
        (token) => {
          if (token) {
            console.log(token);
            this.isLoggedIn = true;
            this.router.navigate(['/dashboard']);
          }
        }
      )

  }
  getAuthStatus(){
    var loginStatus = sessionStorage.getItem("isLoggedIn");
    if (loginStatus == "true"){
      return true
    }

  return false;
  }

  // logout() {
  //   var token = sessionStorage.getItem("token");
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Accept', '*/*',)
  //     .set('Authorization', 'Token ' + token)
  //     .set('Connection', 'keep-alive');
    
  //   return this.http.post<any>(this.baseUrl + "/logout", { headers: headers });
  // }
}
