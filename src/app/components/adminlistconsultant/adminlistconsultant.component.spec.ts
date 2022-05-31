import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistconsultantComponent } from './adminlistconsultant.component';

describe('AdminlistconsultantComponent', () => {
  let component: AdminlistconsultantComponent;
  let fixture: ComponentFixture<AdminlistconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
