import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhlistuserComponent } from './servicegrhlistuser.component';

describe('ServicegrhlistuserComponent', () => {
  let component: ServicegrhlistuserComponent;
  let fixture: ComponentFixture<ServicegrhlistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhlistuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
