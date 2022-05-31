import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeditinformationComponent } from './employeeditinformation.component';

describe('EmployeeditinformationComponent', () => {
  let component: EmployeeditinformationComponent;
  let fixture: ComponentFixture<EmployeeditinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeditinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeditinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
