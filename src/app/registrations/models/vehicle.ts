export interface Vehicle {
  type: VehicleType;
  make: string;
  model: string;
  colour: string;
  vin: string;
  tare_weight: number;
  gross_mass: number | null;
}

export type VehicleType = 'Wagon' | 'Hatch' | 'Sedan' | 'Suv' | 'Truck';
