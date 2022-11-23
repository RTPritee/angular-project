import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public topic = "Register Here";
  FirstName = new FormControl('');
  LastName = new FormControl('');
  Mobile = new FormControl('');
  email = new FormControl('');
  password =new FormControl('');
  constructor(
    public router: Router
  ){}

  ngOnInit(): void {

  }
 registerSubmit(){
  //console.log("clicked");
  this.FirstName.setValue('');
  this.LastName.setValue('');
  this.Mobile.setValue('');
  this.email.setValue('');
  this.password.setValue('');
  this.router.navigate(['/login']);
 } 
//  reset(){
//   this.router.navigate(['/register']);
//  }

}
