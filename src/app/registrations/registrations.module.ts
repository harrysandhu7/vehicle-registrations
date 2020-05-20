import { NgModule } from '@angular/core';
import { RegistrationsListComponent } from './containers/registrations-list/registrations-list.component';
import { RegistrationDetailComponent } from './components/registration-detail/registration-detail.component';
import { RegistrationService } from './services/registrations.service';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationCardComponent } from './components/registration-card/registration-card.component';
import { LOCAL_STORAGE } from './services/cache.service';
import { MaskVinPipe } from './pipes/mask-vin.pipe';
import { RegistrationStatusComponent } from './components/registration-status/registration-status.component';

@NgModule({
  imports: [MaterialModule, CommonModule, HttpClientModule],
  exports: [],
  declarations: [
    RegistrationsListComponent,
    RegistrationDetailComponent,
    RegistrationCardComponent,
    MaskVinPipe,
    RegistrationStatusComponent,
  ],
  providers: [
    RegistrationService,
    { provide: LOCAL_STORAGE, useValue: <any>window.localStorage },
  ],
})
export class RegistrationsModule {}
