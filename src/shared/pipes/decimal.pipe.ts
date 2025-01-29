import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal',
  standalone: true
})
export class DecimalPipe implements PipeTransform {

  transform(value: number | null | undefined, decimalPlaces: number = 2): string {
    if (typeof value !== 'number' || isNaN(value)) {
      return '0'; // Default fallback for invalid values
    }

    if (Number.isInteger(value)) {
      return value.toString(); // Return whole numbers without decimals
    }

    return value.toFixed(decimalPlaces).replace(/\.?0+$/, ''); // Remove trailing zeros
  }
}
