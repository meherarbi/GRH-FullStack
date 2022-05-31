import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeditconsultantComponent } from './employeeditconsultant.component';

describe('EmployeeditconsultantComponent', () => {
  let component: EmployeeditconsultantComponent;
  let fixture: ComponentFixture<EmployeeditconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeditconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeditconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
