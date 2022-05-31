import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistuserComponent } from './employelistuser.component';

describe('EmployelistuserComponent', () => {
  let component: EmployelistuserComponent;
  let fixture: ComponentFixture<EmployelistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
