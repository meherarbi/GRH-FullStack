import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecreateperiodeabsenceComponent } from './employecreateperiodeabsence.component';

describe('EmployecreateperiodeabsenceComponent', () => {
  let component: EmployecreateperiodeabsenceComponent;
  let fixture: ComponentFixture<EmployecreateperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecreateperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecreateperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
