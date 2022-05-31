import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployefooterComponent } from './employefooter.component';

describe('EmployefooterComponent', () => {
  let component: EmployefooterComponent;
  let fixture: ComponentFixture<EmployefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployefooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
