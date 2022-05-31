import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateconsultantComponent } from './admincreateconsultant.component';

describe('AdmincreateconsultantComponent', () => {
  let component: AdmincreateconsultantComponent;
  let fixture: ComponentFixture<AdmincreateconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
