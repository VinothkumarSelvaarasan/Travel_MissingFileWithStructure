import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
 
})
export class RegistrationComponent {

  itemForm: FormGroup;
  formModel:any={userType:null,email:'',password:'',username:''};
  showMessage:boolean=false;

  responseMessage: any;
  constructor(public router:Router, private bookService:HttpService, private formBuilder: FormBuilder) { 
     //complete this function
  }

  ngOnInit(): void {
  }
  onRegister()
  { 
    //complete this function
  }


}
