import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistevaluationComponent } from './adminlistevaluation.component';

describe('AdminlistevaluationComponent', () => {
  let component: AdminlistevaluationComponent;
  let fixture: ComponentFixture<AdminlistevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
