import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatefeuilletempComponent } from './admincreatefeuilletemp.component';

describe('AdmincreatefeuilletempComponent', () => {
  let component: AdmincreatefeuilletempComponent;
  let fixture: ComponentFixture<AdmincreatefeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatefeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatefeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
