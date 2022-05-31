import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditfeuilletempComponent } from './admineditfeuilletemp.component';

describe('AdmineditfeuilletempComponent', () => {
  let component: AdmineditfeuilletempComponent;
  let fixture: ComponentFixture<AdmineditfeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditfeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditfeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
