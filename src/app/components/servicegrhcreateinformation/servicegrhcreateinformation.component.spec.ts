import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhcreateinformationComponent } from './servicegrhcreateinformation.component';

describe('ServicegrhcreateinformationComponent', () => {
  let component: ServicegrhcreateinformationComponent;
  let fixture: ComponentFixture<ServicegrhcreateinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhcreateinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhcreateinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
