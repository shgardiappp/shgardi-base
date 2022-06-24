import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  currentUser:any = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient , private _Router:Router) { 
    if(localStorage.getItem('currentUserToken') != null)
      {
        this.saveCurrentUser();
      }
   

  }



  saveCurrentUser() {
    let token: any = localStorage.getItem('currentUserToken');
    this.currentUser.next(jwtDecode(token));
  }


  makeUserRegistration(formData: object): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formData)
  }


  makeUserLogin(formData: object): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin', formData)
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('currentUserToken')
  }

  makeUserLogout(){
    this.currentUser.next(null);
    localStorage.removeItem('currentUserToken');
    this._Router.navigate(['/login']);
  }


}
