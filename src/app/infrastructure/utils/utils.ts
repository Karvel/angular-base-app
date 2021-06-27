import { CONSTANTS } from './constants';

export class Utils {
  /**
   * Displays the original copyright year or the range from that year to the current year.
   */
  static getCopyrightYear(): string {
    return CONSTANTS.initialCopyrightYear >= new Date().getFullYear()
      ? `${new Date().getFullYear()}`
      : `${CONSTANTS.initialCopyrightYear} - ${new Date().getFullYear()}`;
  }

  public static isMobileDevice(): boolean {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    );
  }
}
