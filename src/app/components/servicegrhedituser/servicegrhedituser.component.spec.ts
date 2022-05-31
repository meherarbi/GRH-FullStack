import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhedituserComponent } from './servicegrhedituser.component';

describe('ServicegrhedituserComponent', () => {
  let component: ServicegrhedituserComponent;
  let fixture: ComponentFixture<ServicegrhedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhedituserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
