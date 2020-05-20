import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskVin',
})
export class MaskVinPipe implements PipeTransform {
  transform(value: string): string {
    return this.maskVin(value);
  }

  private maskVin(vin: string): string {
    if (vin.length < 5) {
      return vin;
    } else {
      const last4 = vin.substring(vin.length - 4);

      const mask = vin.substring(0, vin.length - 5).replace(/\d/g, '*');
      return mask + last4;
    }
  }
}
