import { Component, OnInit } from '@angular/core';

@Component({
 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public topic = "Register Here";
  constructor() { }

  ngOnInit(): void {

  }
 registerSubmit(){
  console.log("clicked");
 } 

}
