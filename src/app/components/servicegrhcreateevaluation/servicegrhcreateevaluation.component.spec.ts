import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhcreateevaluationComponent } from './servicegrhcreateevaluation.component';

describe('ServicegrhcreateevaluationComponent', () => {
  let component: ServicegrhcreateevaluationComponent;
  let fixture: ComponentFixture<ServicegrhcreateevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhcreateevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhcreateevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
