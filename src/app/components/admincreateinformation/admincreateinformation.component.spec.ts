import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateinformationComponent } from './admincreateinformation.component';

describe('AdmincreateinformationComponent', () => {
  let component: AdmincreateinformationComponent;
  let fixture: ComponentFixture<AdmincreateinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
