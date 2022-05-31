import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditevaluationComponent } from './admineditevaluation.component';

describe('AdmineditevaluationComponent', () => {
  let component: AdmineditevaluationComponent;
  let fixture: ComponentFixture<AdmineditevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
