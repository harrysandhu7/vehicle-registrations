import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStatusComponent } from './registration-status.component';
import { MOCK_REGISTRATIONS } from '../../mocks/registrations.mock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegistrationStatusComponent', () => {
  let component: RegistrationStatusComponent;
  let fixture: ComponentFixture<RegistrationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationStatusComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStatusComponent);
    component = fixture.componentInstance;
    component.registration = MOCK_REGISTRATIONS[0].registration;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
