import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecreateinformationComponent } from './employecreateinformation.component';

describe('EmployecreateinformationComponent', () => {
  let component: EmployecreateinformationComponent;
  let fixture: ComponentFixture<EmployecreateinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecreateinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecreateinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
