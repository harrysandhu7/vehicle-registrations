import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationFull, PlateNumber } from '../../models/registration-full';
import { RegistrationService } from '../../services/registrations.service';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.scss'],
})
export class RegistrationDetailComponent implements OnInit {
  registrationData: RegistrationFull;
  Object = Object;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const plateNumber: PlateNumber = params.plate_number;

      if (plateNumber) {
        this.registrationData = this.registrationService.getRegistrationDetails(
          plateNumber
        );

        if (!this.registrationData) {
          this.router.navigate(['/']);
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
