import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrheditevaluationComponent } from './servicegrheditevaluation.component';

describe('ServicegrheditevaluationComponent', () => {
  let component: ServicegrheditevaluationComponent;
  let fixture: ComponentFixture<ServicegrheditevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrheditevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrheditevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
