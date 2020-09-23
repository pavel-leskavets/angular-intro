import {Pipe, PipeTransform} from '@angular/core';
import {Amount} from '../enum/amount.enum';

@Pipe({
        name: 'cutOff'
      })
export class CutOffPipe implements PipeTransform {

  private thousand: number = 1000;
  private amount: { thousand: string, million: string } = Amount;

  public transform(value: string): string | number {
    const count: number = Math.round(+value / this.thousand);
    return count < 1
      ? value
      : count < this.thousand
        ? count + this.amount.thousand
        : count / this.thousand + this.amount.million;
  }

}
