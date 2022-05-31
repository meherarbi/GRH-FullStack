import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhlistperiodeabsenceComponent } from './servicegrhlistperiodeabsence.component';

describe('ServicegrhlistperiodeabsenceComponent', () => {
  let component: ServicegrhlistperiodeabsenceComponent;
  let fixture: ComponentFixture<ServicegrhlistperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhlistperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhlistperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
