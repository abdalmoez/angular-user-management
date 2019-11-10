import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperstr'
})
export class UpperstrPipe implements PipeTransform {

  transform(value: string): any {
    return value.toUpperCase();
  }

}
