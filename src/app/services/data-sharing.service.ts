import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  
  popUpData = new Subject();
  dataShare = new Subject();

  constructor() { }
}
