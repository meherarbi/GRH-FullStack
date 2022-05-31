import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhlistfeuilletempComponent } from './servicegrhlistfeuilletemp.component';

describe('ServicegrhlistfeuilletempComponent', () => {
  let component: ServicegrhlistfeuilletempComponent;
  let fixture: ComponentFixture<ServicegrhlistfeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhlistfeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhlistfeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
