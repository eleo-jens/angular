import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSeconde'
})
export class ToSecondePipe implements PipeTransform {

  transform(value: number): number {
    return value % 60;
  }

}
