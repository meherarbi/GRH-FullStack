import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcandidatComponent } from './admineditcandidat.component';

describe('AdmineditcandidatComponent', () => {
  let component: AdmineditcandidatComponent;
  let fixture: ComponentFixture<AdmineditcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
