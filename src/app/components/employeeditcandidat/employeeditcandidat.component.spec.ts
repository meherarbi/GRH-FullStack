import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeditcandidatComponent } from './employeeditcandidat.component';

describe('EmployeeditcandidatComponent', () => {
  let component: EmployeeditcandidatComponent;
  let fixture: ComponentFixture<EmployeeditcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeditcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeditcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
