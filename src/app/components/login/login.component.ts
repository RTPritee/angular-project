import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //name = new FormControl('');
 // email = new FormControl('');
 // password =new FormControl('');
  

  public loginUserList !: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private formGroup: FormGroup,
    private http: HttpClient
  ){}
  
  ngOnInit(): void {
    this.loginUserList=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  
  submit(){
   // this.name.setValue('');    
    //this.email.setValue('');
   // this.password.setValue('');

    this.http.get<any>("http://localhost:4200/loginUserlist").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginUserList.value.email && a.password === this.loginUserList.value.password
      });
      if(user){
        alert('Login Successful');
        this.router.navigate(['/dashboard']);
      }
      else {
        alert("User not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }
  formSubmit(){
    console.log("pressed!");
    
  }
 
}
