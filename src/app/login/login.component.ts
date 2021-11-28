import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  data = {};
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,public router: Router){};
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    uname:['',[Validators.required]],
    pwd:['',[Validators.required]],
    });
  }
  loginDetails(formdetails) {
    if (formdetails.uname && formdetails.pwd) {
    alert('Login successful');
    this.router.navigate(['login']);
    }
    else {
      alert('please check the Details');

    }
  }
}