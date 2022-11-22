import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');


  public logInForm !: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  submit() {

    const loginUserList = [
      {
        "email": "pritee593@gmail.com",
        "password": "12345Abcde@@"
      }
    ]

    var inputEmail = this.logInForm.get('email')?.value;
    var inputPassword = this.logInForm.get('password')?.value;
    let isValid = false;
    loginUserList.forEach(item=>{
      if(item.email==inputEmail){
        if(item.password==inputPassword){
          isValid = true;
        }
      }
    })

    if(isValid){
      console.log('Authenticated')
    }else{
      console.log('Authentication failed')
    }




    // this.name.setValue('');    
    // this.email.setValue('');
    // this.password.setValue('');

    // subscribe(
    //   (response) => {                           //next() callback
    //     console.log('response received')
    //     this.repos = response; 
    //   },
    //   (error) => {                              //error() callback
    //     console.error('Request failed with error')
    //     this.errorMessage = error;
    //     this.loading = false;
    //   },
    //   () => {                                   //complete() callback
    //     console.error('Request completed')      //This is actually not needed 
    //     this.loading = false; 
    //   })
    // this.http.get<any>("http://localhost:4200/loginUserlist").subscribe({
    //   next: (response) => {                           //next() callback
    //     const user = response.find((a: any) => {
    //       return a.email === this.loginUserList.value.email && a.password === this.loginUserList.value.password
    //     });
    //     if (user) {
    //       alert('Login Successful');
    //       this.router.navigate(['/dashboard']);
    //     }
    //     else {
    //       alert("User not found")
    //     }
    //   },
    //   error: (error) => {                              //error() callback
    //     error.alert("Something went wrong")
    //   }
    // })

    // this.http.get<any>("http://localhost:4200/loginUserlist").subscribe(
    //   res=>{
    //     const user = res.find((a:any)=>{
    //       return a.email === this.loginUserList.value.email && a.password === this.loginUserList.value.password
    //     });
    //     if(user){
    //       alert('Login Successful');
    //       this.router.navigate(['/dashboard']);
    //     }
    //     else {
    //       alert("User not found")
    //     }
    //   }  
    // ,err=>{
    //   alert("Something went wrong")
    // })
  }
  formSubmit() {
    console.log("pressed!");

  }

}
