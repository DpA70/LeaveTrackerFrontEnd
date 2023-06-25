import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppUrlsService {


  tokenObject : any;

  constructor(public http : HttpClient) { }


// Login API
  public loginReq(Obj : any){
   return this.http.post(environment.URL+"login",Obj);
  }

  public getCurrentUser(){
    return this.http.get(environment.URL+"currentUser")
  }


  public sayHello(){
    return this.http.get(environment.URL+"hello")
  }

  public addLeave(leaveObj : any){
    return this.http.post(environment.URL+"saveEmployeeLeave",leaveObj);
  }

  public getLeavesByID(empID:any){
    return this.http.get(environment.URL+"employeeLeaves/"+empID);
  }

  public deleteLeave(id:any){
    return this.http.delete(environment.URL+"deleteLeaveById/"+id);
    
  }

  public getAllLeaves(){
    return this.http.get(environment.URL+"getAllLeaves");
  }


// -----------------------------------------------------------------------------------------------

  public loginUser(token : any){
    localStorage.setItem('token',token);
    return true;
  }

  public isUserLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }


}
