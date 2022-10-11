import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinute'
})
export class ToMinutePipe implements PipeTransform {

  transform(value: number): number {
    return value / 60;
  }

}
