import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBorderByDate]'
})
export class BorderByDateDirective {

  private oneDayInMs: number = 86400000;
  private weeklyBorder: number = 7;
  private monthlyBorder: number = 30;
  private halfYearBorder: number = 180;
  private blueBorder: string = 'blue_border';
  private greenBorder: string = 'green_border';
  private yellowBorder: string = 'yellow_border';
  private redBorder: string = 'red_border';

  @Input('appBorderByDate') public publicationDate: string;

  constructor(private el: ElementRef) {
    const dateNow: Date = new Date();
    const publicationDate: Date = new Date(this.publicationDate);
    const daysCount: number = (dateNow.getTime() - publicationDate.getTime() / this.oneDayInMs);
    const borderStyles: string = daysCount < this.weeklyBorder
      ? this.blueBorder
      : daysCount < this.monthlyBorder
        ? this.greenBorder
        : daysCount < this.halfYearBorder
          ? this.yellowBorder
          : this.redBorder;
    el.nativeElement.classList.add(borderStyles);
  }

}
