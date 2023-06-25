import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplyLeavePopUpComponent } from '../apply-leave-pop-up/apply-leave-pop-up.component';
import { AppUrlsService } from '../services/app-urls.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  empAllLeaves: any[] = [];

  constructor(public login: AppUrlsService, private modal: NgbModal, public data: DataSharingService) { }

  ngOnInit(): void {
    this.data.dataShare.subscribe((resp:any) => {
      this.empAllLeaves.push(resp); console.log(resp);
    })
    this.login.getLeavesByID(this.login.getUser().empId).subscribe((data: any) => {
      this.empAllLeaves = data;
      // console.log(this.empAllLeaves);
    })
  }

  open() {
    const ref = this.modal.open(ApplyLeavePopUpComponent);
  }

  deleteLeave(leaveid: any) {
    this.login.deleteLeave(leaveid).subscribe((resp) => {
      // this.login.deleteLeave(leaveid);
      this.empAllLeaves.forEach((element, index) => {
        if (element.id == leaveid) this.empAllLeaves.splice(index, 1)
      })
    })
  }

}
