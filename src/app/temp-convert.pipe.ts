import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvert'
})
export class TempConvertPipe implements PipeTransform {

  transform(value: number, unit: string, ...args: unknown[]): any {
    if(value != null || isNaN(value)){
      if (unit === 'C') {
        var temperature = (value - 32) /1.8 ;
        return temperature.toFixed(2);
      }
    }
    return null;
  }

}
