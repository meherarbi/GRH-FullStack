import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrheditcandidatComponent } from './servicegrheditcandidat.component';

describe('ServicegrheditcandidatComponent', () => {
  let component: ServicegrheditcandidatComponent;
  let fixture: ComponentFixture<ServicegrheditcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrheditcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrheditcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
