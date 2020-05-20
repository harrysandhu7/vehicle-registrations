import { RegistrationFull } from '../models/registration-full';

export const MOCK_REGISTRATIONS = [
  {
    plate_number: 'EBF28E',
    registration: {
      expired: false,
      expiry_date: '2021-02-05T23:15:30.000Z',
    },
    vehicle: {
      type: 'Wagon',
      make: 'BMW',
      model: 'X4 M40i',
      colour: 'Blue',
      vin: '12389347324',
      tare_weight: 1700,
      gross_mass: null,
    },
    insurer: {
      name: 'Allianz',
      code: 32,
    },
  },
  {
    plate_number: 'CXD82F',
    registration: {
      expired: true,
      expiry_date: '2020-03-01T23:15:30.000Z',
    },
    vehicle: {
      type: 'Hatch',
      make: 'Toyota',
      model: 'Corolla',
      colour: 'Silver',
      vin: '54646546313',
      tare_weight: 1432,
      gross_mass: 1500,
    },
    insurer: {
      name: 'AAMI',
      code: 17,
    },
  },
  {
    plate_number: 'WOP29P',
    registration: {
      expired: false,
      expiry_date: '2020-12-08T23:15:30.000Z',
    },
    vehicle: {
      type: 'Sedan',
      make: 'Mercedes',
      model: 'X4 M40i',
      colour: 'Blue',
      vin: '87676676762',
      tare_weight: 1700,
      gross_mass: null,
    },
    insurer: {
      name: 'GIO',
      code: 13,
    },
  },
] as RegistrationFull[];
