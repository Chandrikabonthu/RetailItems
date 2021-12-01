import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Angular Form Validation Tutorial';
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
 ngOnInit() {
 
 }
  createForm() {
   this.angForm = this.fb.group({
      email: ['', Validators.required ],
      pwd: ['', Validators.required ],
      cnfpwd:['', Validators.required ]
   });
 }
}
