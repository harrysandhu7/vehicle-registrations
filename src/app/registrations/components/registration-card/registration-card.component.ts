import { Component, OnInit, Input, Output } from '@angular/core';
import { RegistrationFull } from '../../models/registration-full';

@Component({
  selector: 'registration-card',
  templateUrl: './registration-card.component.html',
  styleUrls: ['./registration-card.component.scss'],
})
export class RegistrationCardComponent implements OnInit {
  @Input() registration: RegistrationFull;
  constructor() {}

  ngOnInit(): void {}
}
