import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCardComponent } from './registration-card.component';
import { MOCK_REGISTRATIONS } from '../../mocks/registrations.mock';

describe('RegistrationCardComponent', () => {
  let component: RegistrationCardComponent;
  let fixture: ComponentFixture<RegistrationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCardComponent);
    component = fixture.componentInstance;
    component.registration = MOCK_REGISTRATIONS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
