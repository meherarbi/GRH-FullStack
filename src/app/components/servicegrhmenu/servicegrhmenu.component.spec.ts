import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhmenuComponent } from './servicegrhmenu.component';

describe('ServicegrhmenuComponent', () => {
  let component: ServicegrhmenuComponent;
  let fixture: ComponentFixture<ServicegrhmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
