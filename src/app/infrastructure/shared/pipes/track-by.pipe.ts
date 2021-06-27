import { Pipe, PipeTransform } from '@angular/core';

import { Logger } from '../../utils/logger';

@Pipe({ name: 'trackBy' })
export class TrackByPipe implements PipeTransform {
  public transform(key: string): <T, U>(index: number, value: T) => U | null {
    return function trackByKey<T, U>(index: number, value: T): U | null {
      if (value[key] === undefined) {
        Logger.warn(`Key '${key}' not found in *ngFor.`);
      }

      return value ? (value[key] as U) : null;
    };
  }
}
