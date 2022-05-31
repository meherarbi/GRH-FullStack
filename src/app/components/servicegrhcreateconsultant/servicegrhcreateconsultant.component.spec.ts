import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhcreateconsultantComponent } from './servicegrhcreateconsultant.component';

describe('ServicegrhcreateconsultantComponent', () => {
  let component: ServicegrhcreateconsultantComponent;
  let fixture: ComponentFixture<ServicegrhcreateconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhcreateconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhcreateconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
