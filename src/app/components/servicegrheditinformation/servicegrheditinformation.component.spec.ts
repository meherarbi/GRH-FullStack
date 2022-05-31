import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrheditinformationComponent } from './servicegrheditinformation.component';

describe('ServicegrheditinformationComponent', () => {
  let component: ServicegrheditinformationComponent;
  let fixture: ComponentFixture<ServicegrheditinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrheditinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrheditinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
