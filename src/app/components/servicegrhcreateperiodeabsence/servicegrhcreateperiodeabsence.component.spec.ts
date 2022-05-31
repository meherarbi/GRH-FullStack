import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhcreateperiodeabsenceComponent } from './servicegrhcreateperiodeabsence.component';

describe('ServicegrhcreateperiodeabsenceComponent', () => {
  let component: ServicegrhcreateperiodeabsenceComponent;
  let fixture: ComponentFixture<ServicegrhcreateperiodeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhcreateperiodeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhcreateperiodeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
