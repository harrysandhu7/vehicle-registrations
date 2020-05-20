import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationsListComponent } from './containers/registrations-list/registrations-list.component';
import { RegistrationDetailComponent } from './components/registration-detail/registration-detail.component';

const routes: Routes = [
  { path: '', component: RegistrationsListComponent },
  { path: 'details/:plate_number', component: RegistrationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
