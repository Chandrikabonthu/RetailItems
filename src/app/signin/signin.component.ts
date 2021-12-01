import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  title = 'Angular Form Validation Tutorial';
   angForm: FormGroup;
  userForm: any;
  
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
  
  }
   createForm() {
    this.angForm = this.fb.group({
      email: ['',  [Validators.required, Validators.pattern(this.emailPattern)]],
      pwd: ['', Validators.required ]

      
    });
    
  }
}

