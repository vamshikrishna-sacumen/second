import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  response:any;
  loginForm = new FormGroup({
  email : new FormControl("",[Validators.required,Validators.email]),
  password : new FormControl("",[Validators.required])
  });
 
  constructor(private toast:NgToastService,private router:Router){}

  onlogin(){
    if (this.loginForm.valid){
      console.log(this.loginForm)
      this.router.navigateByUrl("/home")
      this.toast.success({detail:"Success",summary:"Login successfully",duration:5000})
      }
  }
}
