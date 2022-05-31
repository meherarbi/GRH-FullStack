import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateevaluationComponent } from './admincreateevaluation.component';

describe('AdmincreateevaluationComponent', () => {
  let component: AdmincreateevaluationComponent;
  let fixture: ComponentFixture<AdmincreateevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
