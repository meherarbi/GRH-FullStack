import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhcreateuserComponent } from './servicegrhcreateuser.component';

describe('ServicegrhcreateuserComponent', () => {
  let component: ServicegrhcreateuserComponent;
  let fixture: ComponentFixture<ServicegrhcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhcreateuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
