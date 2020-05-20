import { Registration } from './registration';
import { Vehicle } from './vehicle';
import { Insurer } from './insurer';

export type PlateNumber = string;
export interface RegistrationFull {
  plate_number: PlateNumber;
  registration: Registration;
  vehicle: Vehicle;
  insurer: Insurer;
}
