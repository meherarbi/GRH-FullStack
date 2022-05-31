import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrheditperiodeabsenceComponent } from './servicegrheditperiodeabsence.component';

describe('ServicegrheditperiodeabsenceComponent', () => {
  let component: ServicegrheditperiodeabsenceComponent;
  let fixture: ComponentFixture<ServicegrheditperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrheditperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrheditperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
