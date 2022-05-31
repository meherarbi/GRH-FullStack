import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedituserComponent } from './employeedituser.component';

describe('EmployeedituserComponent', () => {
  let component: EmployeedituserComponent;
  let fixture: ComponentFixture<EmployeedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedituserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
