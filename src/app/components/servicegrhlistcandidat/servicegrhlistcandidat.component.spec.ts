import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhlistcandidatComponent } from './servicegrhlistcandidat.component';

describe('ServicegrhlistcandidatComponent', () => {
  let component: ServicegrhlistcandidatComponent;
  let fixture: ComponentFixture<ServicegrhlistcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhlistcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhlistcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
