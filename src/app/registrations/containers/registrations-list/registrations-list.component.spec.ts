import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsListComponent } from './registrations-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationService } from '../../services/registrations.service';
import { of } from 'rxjs';
import { MOCK_REGISTRATIONS } from '../../mocks/registrations.mock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegistrationsListComponent', () => {
  let component: RegistrationsListComponent;
  let fixture: ComponentFixture<RegistrationsListComponent>;
  let registrationServiceSpy: jasmine.Spy;

  beforeEach(async(() => {
    registrationServiceSpy = jasmine.createSpyObj('RegistrationService', [
      'getRegistrations',
    ]);

    TestBed.configureTestingModule({
      declarations: [RegistrationsListComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: RegistrationService, useValue: registrationServiceSpy },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();

    const registrationServiceSpyObj = TestBed.inject(
      RegistrationService
    ) as jasmine.SpyObj<RegistrationService>;
    registrationServiceSpyObj.getRegistrations.and.returnValue(
      of(MOCK_REGISTRATIONS)
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
