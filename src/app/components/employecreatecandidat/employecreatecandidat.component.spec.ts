import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecreatecandidatComponent } from './employecreatecandidat.component';

describe('EmployecreatecandidatComponent', () => {
  let component: EmployecreatecandidatComponent;
  let fixture: ComponentFixture<EmployecreatecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecreatecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecreatecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
