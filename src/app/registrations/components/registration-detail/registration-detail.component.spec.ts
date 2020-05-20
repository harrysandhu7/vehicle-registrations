import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDetailComponent } from './registration-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegistrationService } from '../../services/registrations.service';

describe('RegistrationDetailComponent', () => {
  let component: RegistrationDetailComponent;
  let fixture: ComponentFixture<RegistrationDetailComponent>;
  const registrationService = jasmine.createSpyObj('RegistrationService', [
    'getRegistrationDetails',
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: RegistrationService, useValue: registrationService}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
