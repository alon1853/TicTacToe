import { Pipe, PipeTransform } from '@angular/core';
import { PlayerEnum } from '../enums/player.enum';

@Pipe({
  name: 'convertPlayer'
})
export class ConvertPlayerPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value < 0 || value > 1) {
      return '';
    }

    return PlayerEnum[value];
  }

}
