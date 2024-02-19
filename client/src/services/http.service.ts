import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName="http://localhost:5000";
  constructor(private http: HttpClient, private authService:AuthService) {

   }
 



  




  Login(details:any):Observable<any> {
//complete this function
  }
  registerUser(details:any):Observable<any> {
      
//complete this function
  }
  getStatename():Observable<any> {
      
//complete this function
  }
  
  
  

  addDestination(details:any):Observable<any> {
      
//complete this function
  }

  getDestinationData():Observable<any> {
   
      
//complete this function
  }

  getLocationData(statenam:any):Observable<any> {
   
       
//complete this function
    
  }
}
