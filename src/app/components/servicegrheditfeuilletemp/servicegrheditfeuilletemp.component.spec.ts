import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrheditfeuilletempComponent } from './servicegrheditfeuilletemp.component';

describe('ServicegrheditfeuilletempComponent', () => {
  let component: ServicegrheditfeuilletempComponent;
  let fixture: ComponentFixture<ServicegrheditfeuilletempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrheditfeuilletempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrheditfeuilletempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
