import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployemenuComponent } from './employemenu.component';

describe('EmployemenuComponent', () => {
  let component: EmployemenuComponent;
  let fixture: ComponentFixture<EmployemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
