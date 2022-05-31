import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistcandidatComponent } from './adminlistcandidat.component';

describe('AdminlistcandidatComponent', () => {
  let component: AdminlistcandidatComponent;
  let fixture: ComponentFixture<AdminlistcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
