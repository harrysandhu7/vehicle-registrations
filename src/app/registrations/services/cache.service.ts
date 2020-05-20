import { Injectable, inject, Inject } from '@angular/core';
import { RegistrationFull } from '../models/registration-full';
import { InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken('LocalStorage');
export const LOCAL_STORAGE_KEY = 'Registrations.list';
export interface RegistrationMap {
  [key: string]: RegistrationFull;
}

@Injectable({ providedIn: 'root' })
export class CacheService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage) {}

  getRegistrations() {
    return this.safeGet(LOCAL_STORAGE_KEY);
  }
  setRegistrations(registrations) {
    return this.safeSet(LOCAL_STORAGE_KEY, registrations);
  }

  private safeSet(key, data) {
    return this.localStorage.setItem(key, JSON.stringify(data));
  }

  private safeGet(key) {
    return JSON.parse(this.localStorage.getItem(key));
  }
}
