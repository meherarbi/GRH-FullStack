import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistconsultantComponent } from './employelistconsultant.component';

describe('EmployelistconsultantComponent', () => {
  let component: EmployelistconsultantComponent;
  let fixture: ComponentFixture<EmployelistconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
