import { Component, OnInit } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DataSharingService } from '../services/data-sharing.service';
import { AppUrlsService } from '../services/app-urls.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-apply-leave-pop-up',
  templateUrl: './apply-leave-pop-up.component.html',
  styleUrls: ['./apply-leave-pop-up.component.css']
})
export class ApplyLeavePopUpComponent implements OnInit {


  startDate : any;
  endDate : any;
  reason : any;
  today = new Date()
  minDate : any;

  public leaveObj = {
    "id":"",
    "empId" : "",
    "firstName" : "",
    "lastName" : "",
    "startDate" : "",
    "endDate" : "",
    "reason" : ""
  }


  constructor(private modal : NgbModal, public data : DataSharingService, public urls : AppUrlsService, public datepipe:DatePipe) { }

  ngOnInit(): void {
    this.minDate = this.datepipe.transform(this.today, 'yyyy-MM-dd');
  }

  apply(){
    this.leaveObj.empId = this.urls.getUser().empId;
    this.leaveObj.firstName = this.urls.getUser().firstName;
    this.leaveObj.lastName = this.urls.getUser().lastName;
    this.leaveObj.startDate = this.startDate.toString();
    this.leaveObj.endDate = this.endDate.toString()
    this.leaveObj.reason = this.reason;
    this.urls.addLeave(this.leaveObj).subscribe((res:any)=> {
      this.leaveObj.id = res.id;
    });
    this.data.dataShare.next(this.leaveObj);
    // console.log(this.startDate.toString())
    this.close();
  }

  calculateDays(){
    const date1 = new Date(this.startDate);
    const date2 = new Date(this.today);
    const time = date1.getTime() - date2.getTime();

    console.log("date 1 : " + date1)
    console.log("date 2 : " + date2)
    let days = time/(1000*3600*24);
    
    if(days > 1){
      return true;
    }else{
      return false;
    }
  }


  close(){
    const ref = this.modal.dismissAll();
  }

}
