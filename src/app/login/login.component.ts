import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUrlsService } from '../services/app-urls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  badCredentials : boolean = false;

  constructor(public fb: FormBuilder, public urlService: AppUrlsService, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [],
      password: []
    })
  }

  loginData = {
    "username": "",
    "password": ""
  }

  OnClick() {
    console.log(this.loginForm.value);
    this.loginData.username = this.loginForm.value.userName;
    this.loginData.password = this.loginForm.value.password;

    this.urlService.loginReq(this.loginData).subscribe((resp: any) => {
      this.urlService.loginUser(resp.token);

      this.urlService.getCurrentUser().subscribe((user:any)=>{ 
        this.urlService.setUser(user);

        if(this.urlService.getUserRole() === "ADMIN"){
          this.router.navigate(['admin']);
        }else if(this.urlService.getUserRole() === "USER"){
          this.router.navigate(['user']);
        }
      })
    }, 
    () => { 
          this.badCredentials = true;
          console.log("Login Failed"); 
        }
    )
  }

}
