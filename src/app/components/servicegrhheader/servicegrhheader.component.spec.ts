import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhheaderComponent } from './servicegrhheader.component';

describe('ServicegrhheaderComponent', () => {
  let component: ServicegrhheaderComponent;
  let fixture: ComponentFixture<ServicegrhheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
