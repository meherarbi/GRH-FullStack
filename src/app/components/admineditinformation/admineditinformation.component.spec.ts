import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditinformationComponent } from './admineditinformation.component';

describe('AdmineditinformationComponent', () => {
  let component: AdmineditinformationComponent;
  let fixture: ComponentFixture<AdmineditinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
