import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  loginState: boolean = false;
  currentUsername: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  isLogin(): boolean {
    return this._AuthService.currentUser.getValue() != null;
  }

  logout() {
    this.closeNavbar();
    this._AuthService.makeUserLogout();
  }

  closeNavbar() {
    $('.navbar-collapse').collapse('hide');
  }



  ngOnInit(): void {
    this._AuthService.currentUser.subscribe(() => {
      this.loginState = this.isLogin();
     
      this.currentUsername = this._AuthService.currentUser.getValue() ?
       `${this._AuthService.currentUser.getValue().first_name} ${this._AuthService.currentUser.getValue().last_name}`
        : 'Authenticate'; 

      
    });
  }
}
