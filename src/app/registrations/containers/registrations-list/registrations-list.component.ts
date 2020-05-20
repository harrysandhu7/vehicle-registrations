import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RegistrationFull } from '../../models/registration-full';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registrations.service';

@Component({
  selector: 'registrations-list',
  templateUrl: './registrations-list.component.html',
  styleUrls: ['./registrations-list.component.scss'],
})
export class RegistrationsListComponent implements OnInit {
  registrations$: Observable<RegistrationFull[]>;
  constructor(
    private router: Router,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.registrations$ = this.registrationService.getRegistrations();
  }
  goToDetailsPage(registrationData: RegistrationFull) {
    this.router.navigate(['details', registrationData.plate_number]);
  }
}
