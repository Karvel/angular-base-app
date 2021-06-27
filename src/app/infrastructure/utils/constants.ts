interface Constants {
  readonly DIGIT_REGEX: RegExp;
  readonly EMAIL_REGEX: RegExp;
  readonly SYMBOL_REGEX: RegExp;
}

export const CONSTANTS: Constants = {
  DIGIT_REGEX: /[0-9]/,
  EMAIL_REGEX:
    /^[a-z0-9!#$%&'*+\/=?^_\`{|}~.-]+@[a-z0-9]([a-z0-9-])+(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
  SYMBOL_REGEX: /[-+_!@#$%^&*,.?]/,
};
