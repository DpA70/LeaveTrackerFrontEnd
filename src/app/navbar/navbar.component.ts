import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppUrlsService } from '../services/app-urls.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {


  username : any;

  constructor(public login: AppUrlsService, public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.login.logout();
    this.router.navigate(['login']);
  }

}
