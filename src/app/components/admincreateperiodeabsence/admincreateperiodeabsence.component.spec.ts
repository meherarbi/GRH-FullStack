import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateperiodeabsenceComponent } from './admincreateperiodeabsence.component';

describe('AdmincreateperiodeabsenceComponent', () => {
  let component: AdmincreateperiodeabsenceComponent;
  let fixture: ComponentFixture<AdmincreateperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
