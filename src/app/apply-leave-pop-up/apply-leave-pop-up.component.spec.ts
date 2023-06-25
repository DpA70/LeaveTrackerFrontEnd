import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeavePopUpComponent } from './apply-leave-pop-up.component';

describe('ApplyLeavePopUpComponent', () => {
  let component: ApplyLeavePopUpComponent;
  let fixture: ComponentFixture<ApplyLeavePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyLeavePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyLeavePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
