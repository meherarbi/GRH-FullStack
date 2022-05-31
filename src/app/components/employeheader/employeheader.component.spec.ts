import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeheaderComponent } from './employeheader.component';

describe('EmployeheaderComponent', () => {
  let component: EmployeheaderComponent;
  let fixture: ComponentFixture<EmployeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
