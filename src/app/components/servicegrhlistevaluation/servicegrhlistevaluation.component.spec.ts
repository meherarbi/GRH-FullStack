import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhlistevaluationComponent } from './servicegrhlistevaluation.component';

describe('ServicegrhlistevaluationComponent', () => {
  let component: ServicegrhlistevaluationComponent;
  let fixture: ComponentFixture<ServicegrhlistevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhlistevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhlistevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
