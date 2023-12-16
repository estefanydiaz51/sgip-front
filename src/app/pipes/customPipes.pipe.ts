import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToDayMonthYear'
})
export class DateToDayMonthYearPipe implements PipeTransform {
  transform(
    value: string,
    showTime: boolean = false,
    showMonth: boolean = false
  ): string {
    let transformedValue = value.toString();
    if (transformedValue.includes('Z')) {
      transformedValue = transformedValue.replace('Z', '');
    }
    if (transformedValue.includes('[UTC]')) {
      transformedValue = transformedValue.replace('[UTC]', '');
    }

    const date = new Date(transformedValue);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: showMonth ? 'short' : 'numeric',
      day: 'numeric',
      timeZone: 'America/Bogota',
    };

    if (showTime) {
      options.hour = 'numeric';
      options.minute = 'numeric';
    }

    return date.toLocaleDateString('es-CO', options);
  }
}
