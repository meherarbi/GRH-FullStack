import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistperiodeabsenceComponent } from './employelistperiodeabsence.component';

describe('EmployelistperiodeabsenceComponent', () => {
  let component: EmployelistperiodeabsenceComponent;
  let fixture: ComponentFixture<EmployelistperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
