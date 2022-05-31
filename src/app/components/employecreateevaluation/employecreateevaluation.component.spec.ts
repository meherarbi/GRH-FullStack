import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecreateevaluationComponent } from './employecreateevaluation.component';

describe('EmployecreateevaluationComponent', () => {
  let component: EmployecreateevaluationComponent;
  let fixture: ComponentFixture<EmployecreateevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecreateevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecreateevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
