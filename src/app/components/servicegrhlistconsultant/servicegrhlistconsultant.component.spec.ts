import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhlistconsultantComponent } from './servicegrhlistconsultant.component';

describe('ServicegrhlistconsultantComponent', () => {
  let component: ServicegrhlistconsultantComponent;
  let fixture: ComponentFixture<ServicegrhlistconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhlistconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhlistconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
