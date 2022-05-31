import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrheditconsultantComponent } from './servicegrheditconsultant.component';

describe('ServicegrheditconsultantComponent', () => {
  let component: ServicegrheditconsultantComponent;
  let fixture: ComponentFixture<ServicegrheditconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrheditconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrheditconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
