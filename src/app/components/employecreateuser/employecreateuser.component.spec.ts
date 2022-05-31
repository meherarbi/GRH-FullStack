import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecreateuserComponent } from './employecreateuser.component';

describe('EmployecreateuserComponent', () => {
  let component: EmployecreateuserComponent;
  let fixture: ComponentFixture<EmployecreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecreateuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
