import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhfooterComponent } from './servicegrhfooter.component';

describe('ServicegrhfooterComponent', () => {
  let component: ServicegrhfooterComponent;
  let fixture: ComponentFixture<ServicegrhfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
