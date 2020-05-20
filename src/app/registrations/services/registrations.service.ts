import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RegistrationFull, PlateNumber } from '../models/registration-full';
import { map, catchError, tap } from 'rxjs/operators';
import { CacheService } from './cache.service';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  registrations: RegistrationFull[];

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getRegistrations(): Observable<RegistrationFull[]> {
    if (this.registrations) {
      return of(this.registrations as RegistrationFull[]);
    } else {
      return this.http
        .get<RegistrationFull[]>(
          'https://dl.dropboxusercontent.com/s/wcp5aajrrx533bp/snsw_registrations_api.json'
        )
        .pipe(
          map((resp: any) => resp.registrations),
          tap((registrations) => {
            this.registrations = registrations;
            this.cacheService.setRegistrations(registrations);
          }),
          catchError(() => {
            return this.cacheService.getRegistrations() || [];
          })
        );
    }
  }

  getRegistrationDetails(plateNumber: PlateNumber): RegistrationFull {
    const registrations =
      this.registrations || this.cacheService.getRegistrations();
    if (registrations) {
      const result = registrations.filter(
        (registration) => registration.plate_number === plateNumber
      );
      return result[0];
    }
    return;
  }

}
