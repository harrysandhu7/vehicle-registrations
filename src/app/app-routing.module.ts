import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationsListComponent } from './registrations/containers/registrations-list/registrations-list.component';
import { RegistrationRoutingModule } from './registrations/registration-routing.module';

const routes: Routes = [{ path: '', component: RegistrationsListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), RegistrationRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
