import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistinformationComponent } from './adminlistinformation.component';

describe('AdminlistinformationComponent', () => {
  let component: AdminlistinformationComponent;
  let fixture: ComponentFixture<AdminlistinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
