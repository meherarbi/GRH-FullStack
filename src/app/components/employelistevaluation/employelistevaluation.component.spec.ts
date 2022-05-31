import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistevaluationComponent } from './employelistevaluation.component';

describe('EmployelistevaluationComponent', () => {
  let component: EmployelistevaluationComponent;
  let fixture: ComponentFixture<EmployelistevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
