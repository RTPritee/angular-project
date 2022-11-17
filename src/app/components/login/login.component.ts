import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('');
  password =new FormControl('');
  


  constructor(
    public router: Router
  ){}
  
  ngOnInit(): void {
  }
  
  submit(){
    this.name.setValue('');    
    this.email.setValue('');
    this.password.setValue('');
    this.router.navigate(['/dashboard']);
  
  }
  formSubmit(){
    console.log("pressed!");
    
  }
 
}
