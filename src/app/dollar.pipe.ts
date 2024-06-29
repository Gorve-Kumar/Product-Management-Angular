import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar',
  standalone: true
})
export class DollarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "$"+value;
  }

}
