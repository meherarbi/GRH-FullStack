import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditperiodeabsenceComponent } from './admineditperiodeabsence.component';

describe('AdmineditperiodeabsenceComponent', () => {
  let component: AdmineditperiodeabsenceComponent;
  let fixture: ComponentFixture<AdmineditperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
