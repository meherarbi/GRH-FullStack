import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecreateconsultantComponent } from './employecreateconsultant.component';

describe('EmployecreateconsultantComponent', () => {
  let component: EmployecreateconsultantComponent;
  let fixture: ComponentFixture<EmployecreateconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecreateconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecreateconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
