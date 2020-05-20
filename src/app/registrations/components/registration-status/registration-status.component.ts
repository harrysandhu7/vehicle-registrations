import { Component, OnInit, Input } from '@angular/core';
import { Registration } from '../../models/registration';

@Component({
  selector: 'registration-status',
  templateUrl: './registration-status.component.html',
  styleUrls: ['./registration-status.component.scss'],
})
export class RegistrationStatusComponent implements OnInit {
  @Input() registration: Registration;
  registrationStatus: string;
  statusCls = 'valid';

  constructor() {}

  ngOnInit(): void {
    this.registrationStatus = this.getRegistrationStatus(this.registration);
  }

  getRegistrationStatus(registration: Registration) {
    if (registration.expired) {
      this.statusCls = 'expired';
      return 'Expired';
    }

    const currentDate = new Date();
    const expiryDate = new Date(registration.expiry_date);
    let diff = (expiryDate.getTime() - currentDate.getTime()) / 1000;
    diff /= 60 * 60 * 24 * 7 * 4;
    return `${Math.abs(Math.round(diff))} Month(s) left`;
  }
}
