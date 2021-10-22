import { Pipe, PipeTransform } from '@angular/core';

import { Logger } from '../../utils/logger';

@Pipe({ name: 'trackBy' })
export class TrackByPipe implements PipeTransform {
  public transform(key: string): (index: number, value: any) => any | null {
    return function trackByKey(index: number, value: any): any | null {
      if (value[key] === undefined) {
        Logger.warn(`Key '${key}' not found in *ngFor.`);
      }

      return value ? value[key] : null;
    };
  }
}
