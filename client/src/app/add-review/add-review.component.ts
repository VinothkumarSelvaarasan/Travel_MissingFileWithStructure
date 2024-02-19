import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-addreview',
  templateUrl: './add-review.component.html'
 
})
export class AddReviewComponent {
  itemForm: FormGroup;
  reviewData: any={};
  locationData:any={};
  showError:boolean=false;
  errorMessage:any;
  formModel:any={status:null};
  cargList:any=[];
  assignModel: any={};
  driverList:any=[]
  showMessage: any;
  responseMessage: any;
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService)
  {
    //complete this function
  }

  callLocation()
  {
 //complete this function
    }
  
  onSubmit()
  {
 //complete this function
  }
}
