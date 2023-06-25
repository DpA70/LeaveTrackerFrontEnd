import { Component, OnInit } from '@angular/core';
import { AppUrlsService } from '../services/app-urls.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allLeaves : any[] = [];
  filterText : any;


  constructor(public login : AppUrlsService) { }

  ngOnInit(): void {
    this.login.getAllLeaves().subscribe((data:any)=>{
      console.log(data);
      this.allLeaves = data;
    })
  }

}
