import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeditfeuilletempComponent } from './employeeditfeuilletemp.component';

describe('EmployeeditfeuilletempComponent', () => {
  let component: EmployeeditfeuilletempComponent;
  let fixture: ComponentFixture<EmployeeditfeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeditfeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeditfeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
