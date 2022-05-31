import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeditperiodeabsenceComponent } from './employeeditperiodeabsence.component';

describe('EmployeeditperiodeabsenceComponent', () => {
  let component: EmployeeditperiodeabsenceComponent;
  let fixture: ComponentFixture<EmployeeditperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeditperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeditperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
