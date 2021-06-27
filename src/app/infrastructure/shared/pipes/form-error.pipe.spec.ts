import { FormErrorPipe } from './form-error.pipe';

describe('[Unit] FormErrorPipe', () => {
  const pipe = new FormErrorPipe();

  it('should return the first error value as a string', () => {
    const error = {
      incorrectMailFormat: 'Invalid email.',
      required: true,
    };
    const expectedValue = 'Invalid email.';
    expect(pipe.transform(error)).toEqual(expectedValue);
  });

  it('should return an empty string if the error is null', () => {
    const error = null;
    const expectedValue = '';
    expect(pipe.transform(error)).toEqual(expectedValue);
  });

  it('should return the parameter when it is not an object', () => {
    const error = 'test';
    expect(pipe.transform(error)).toEqual(error);
  });
});
