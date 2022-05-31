import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistperiodeabsenceComponent } from './adminlistperiodeabsence.component';

describe('AdminlistperiodeabsenceComponent', () => {
  let component: AdminlistperiodeabsenceComponent;
  let fixture: ComponentFixture<AdminlistperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
