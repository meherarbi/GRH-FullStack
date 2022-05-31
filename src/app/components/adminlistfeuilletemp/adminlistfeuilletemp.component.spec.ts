import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistfeuilletempComponent } from './adminlistfeuilletemp.component';

describe('AdminlistfeuilletempComponent', () => {
  let component: AdminlistfeuilletempComponent;
  let fixture: ComponentFixture<AdminlistfeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistfeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistfeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
