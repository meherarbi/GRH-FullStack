import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditconsultantComponent } from './admineditconsultant.component';

describe('AdmineditconsultantComponent', () => {
  let component: AdmineditconsultantComponent;
  let fixture: ComponentFixture<AdmineditconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
