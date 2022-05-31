import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeditevaluationComponent } from './employeeditevaluation.component';

describe('EmployeeditevaluationComponent', () => {
  let component: EmployeeditevaluationComponent;
  let fixture: ComponentFixture<EmployeeditevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeditevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeditevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
