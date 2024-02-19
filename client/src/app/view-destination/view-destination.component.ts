import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-view-destination',
  templateUrl: './view-destination.component.html',
  styleUrls: ['./view-destination.component.scss']
})
export class ViewDestinationComponent implements OnInit {
  

  destinationData:any={}
  showError:any;
  errorMessage: any;

  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
  {

  }
  ngOnInit(): void {
    this.search();
  }

  search()
  {
    //complete this function
    }
     
    
  }



