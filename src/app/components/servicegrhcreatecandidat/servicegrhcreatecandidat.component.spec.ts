import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicegrhcreatecandidatComponent } from './servicegrhcreatecandidat.component';

describe('ServicegrhcreatecandidatComponent', () => {
  let component: ServicegrhcreatecandidatComponent;
  let fixture: ComponentFixture<ServicegrhcreatecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicegrhcreatecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicegrhcreatecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
