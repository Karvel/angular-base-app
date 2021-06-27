/* eslint-disable no-console */
export class Logger {
  static error(message: string): void {
    console.error(message);
  }
  static info(message: string): void {
    console.info(message);
  }

  static log(message: string): void {
    console.log(message);
  }

  static warn(message: string): void {
    console.warn(message);
  }
}
