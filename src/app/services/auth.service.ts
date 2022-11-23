import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http:HttpClient) {}
  baseUrl = 'https://restful-booker.herokuapp.com';
  isLoggedIn = false;

  login( email:any, password:any){
    // console.log(email, password);
    return this.http.post<any>(this.baseUrl+ "/auth",{"email":email,"password":password}).subscribe(
      (token) => {
        if(token){
          this.isLoggedIn=true;
          this.router.navigate(['/dashboard']);
        }
      }
    )
    
  }
}
