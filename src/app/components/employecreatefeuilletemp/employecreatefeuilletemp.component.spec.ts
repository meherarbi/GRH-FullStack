import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecreatefeuilletempComponent } from './employecreatefeuilletemp.component';

describe('EmployecreatefeuilletempComponent', () => {
  let component: EmployecreatefeuilletempComponent;
  let fixture: ComponentFixture<EmployecreatefeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecreatefeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecreatefeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
