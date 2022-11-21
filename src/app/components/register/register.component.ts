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
  constructor(
    public router: Router
  ){}

  ngOnInit(): void {

  }
 registerSubmit(){
  //console.log("clicked");
  this.router.navigate(['/dashboard']);
 } 
 reset(){
  this.router.navigate(['/register']);
 }

}
