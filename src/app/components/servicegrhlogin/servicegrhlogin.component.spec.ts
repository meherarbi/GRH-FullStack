import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhloginComponent } from './servicegrhlogin.component';

describe('ServicegrhloginComponent', () => {
  let component: ServicegrhloginComponent;
  let fixture: ComponentFixture<ServicegrhloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
