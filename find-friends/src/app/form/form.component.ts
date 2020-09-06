import { Component, OnInit } from '@angular/core';
import { CheckdetailsService} from '../checkdetails.service';
import { FormGroup, FormControl,} from '@angular/forms';

import {
  ReactiveFormsModule,
FormsModule,
  Validators,
  FormBuilder
} from '@angular/forms';

interface user{
  name :string;
  lastname :string;
  email:string;
  phone:string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  angForm: FormGroup;
 authenticated=false;
  constructor(private checkdetails: CheckdetailsService,private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       lastname: ['', Validators.required ],
       email: ['', [Validators.required ,Validators.email]],
       phone: ['', Validators.required ],
    });
  }
  ngOnInit(): void {}

  Authentication()
  {
    this.authenticated=true;
  }
  isAuthenticated()
  {
    if(this.checkAuthentication())
    return "Authenticated";
    else
    return "Not Authenticated"
  }
  checkAuthentication()
  {
    return this.authenticated;
  }


};
