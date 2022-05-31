import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistinformationComponent } from './employelistinformation.component';

describe('EmployelistinformationComponent', () => {
  let component: EmployelistinformationComponent;
  let fixture: ComponentFixture<EmployelistinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
