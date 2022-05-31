import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatecandidatComponent } from './admincreatecandidat.component';

describe('AdmincreatecandidatComponent', () => {
  let component: AdmincreatecandidatComponent;
  let fixture: ComponentFixture<AdmincreatecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
