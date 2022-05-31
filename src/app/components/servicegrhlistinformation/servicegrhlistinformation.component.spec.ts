import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhlistinformationComponent } from './servicegrhlistinformation.component';

describe('ServicegrhlistinformationComponent', () => {
  let component: ServicegrhlistinformationComponent;
  let fixture: ComponentFixture<ServicegrhlistinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhlistinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhlistinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
