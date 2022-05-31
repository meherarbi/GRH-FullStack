import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhcreatefeuilletempComponent } from './servicegrhcreatefeuilletemp.component';

describe('ServicegrhcreatefeuilletempComponent', () => {
  let component: ServicegrhcreatefeuilletempComponent;
  let fixture: ComponentFixture<ServicegrhcreatefeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhcreatefeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhcreatefeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
