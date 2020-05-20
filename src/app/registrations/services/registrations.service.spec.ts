import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { RegistrationService } from './registrations.service';
import { MOCK_REGISTRATIONS } from '../mocks/registrations.mock';
import { RegistrationFull } from '../models/registration-full';
import { CacheService } from './cache.service';

class MockHttp {
  get() {
    return of([]);
  }
}

describe('RegistrationService', () => {
  let service: RegistrationService;
  let http: HttpClient;
  let cacheServiceObj: CacheService;
  const cacheService = jasmine.createSpyObj('CacheService', [
    'getRegistrations',
    'setRegistrations',
  ]);

  beforeEach(() => {
    cacheService.getRegistrations.and.returnValue(of(MOCK_REGISTRATIONS));

    const bed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RegistrationService,
        { provide: HttpClient, useClass: MockHttp },
        { provide: CacheService, useValue: cacheService },
      ],
    });
    http = bed.inject(HttpClient);
    service = bed.inject(RegistrationService);
    cacheServiceObj = bed.inject(CacheService);
  });

  it('should be created', () => {
    service = TestBed.inject(RegistrationService);
    expect(service).toBeTruthy();
  });

  it('-getRegistrations()- should get all registrations', () => {
    spyOn(http, 'get').and.returnValue(
      of({ registrations: MOCK_REGISTRATIONS })
    );

    service.getRegistrations().subscribe((result) => {
      expect(service.registrations).toEqual(MOCK_REGISTRATIONS);
      expect(result).toEqual(MOCK_REGISTRATIONS);
    });
  });

  it('-getRegistrations()- should set registrations to cache service', () => {
    spyOn(http, 'get').and.returnValue(
      of({ registrations: MOCK_REGISTRATIONS })
    );

    service.getRegistrations().subscribe((result) => {
      expect(cacheServiceObj).toHaveBeenCalled();
      expect(cacheServiceObj.setRegistrations).toHaveBeenCalledWith(
        jasmine.arrayContaining(MOCK_REGISTRATIONS)
      );
      expect(result).toEqual(MOCK_REGISTRATIONS);
    });
  });

  it('-getRegistrationDetails()- should get details by plate number', () => {
    service.registrations = MOCK_REGISTRATIONS;

    const registrationDetail = service.getRegistrationDetails(
      MOCK_REGISTRATIONS[0].plate_number
    );
    expect(registrationDetail).toEqual(MOCK_REGISTRATIONS[0]);
  });
});
