import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistcandidatComponent } from './employelistcandidat.component';

describe('EmployelistcandidatComponent', () => {
  let component: EmployelistcandidatComponent;
  let fixture: ComponentFixture<EmployelistcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
