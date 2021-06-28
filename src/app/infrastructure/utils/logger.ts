/* eslint-disable no-console */
export class Logger {
  /* istanbul ignore next */
  static error(message: string): void {
    console.error(message);
  }

  /* istanbul ignore next */
  static info(message: string): void {
    console.info(message);
  }

  /* istanbul ignore next */
  static log(message: string): void {
    console.log(message);
  }

  /* istanbul ignore next */
  static warn(message: string): void {
    console.warn(message);
  }
}
