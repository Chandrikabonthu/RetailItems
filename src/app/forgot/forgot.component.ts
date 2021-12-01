import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
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
    
   });
 }
}
