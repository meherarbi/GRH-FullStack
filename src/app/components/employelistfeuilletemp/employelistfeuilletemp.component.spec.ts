import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistfeuilletempComponent } from './employelistfeuilletemp.component';

describe('EmployelistfeuilletempComponent', () => {
  let component: EmployelistfeuilletempComponent;
  let fixture: ComponentFixture<EmployelistfeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistfeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistfeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
