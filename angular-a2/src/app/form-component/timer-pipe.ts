import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Timer',
  standalone: true,
})
export class TimerPipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 3600000);
    const minutes: number = Math.floor((value % 3600000) / 60000);
    const seconds: number = Math.floor((value % 60000) / 1000);
    const millisecs: number = value % 1000;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(
      seconds
    )}:${this.padMilliseconds(millisecs)}`;
  }

  // display
  private pad(num: number): string {
    // if the number is not exceed 10 it will be displayed as 0 with that number --> 02, 09
    return num < 10 ? '0' + num : num.toString();
  }

  private padMilliseconds(num: number): string {
    if (num < 10) {
      return '00' + num;
    } else if (num < 100) {
      return '0' + num;
    } else {
      return num.toString();
    }
  }
}
