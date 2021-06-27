import { Logger } from '../../utils/logger';
import { TrackByPipe } from './track-by.pipe';

describe('[Unit] TrackByPipe', () => {
  const pipe = new TrackByPipe();

  it(`should return the values from the indexed iterated object when provided a valid key`, () => {
    const key = 'test';
    const payload = [
      { id: 1, test: 'foo' },
      { id: 2, test: 'bar' },
    ];

    payload.forEach((item, index) => {
      expect(pipe.transform(key)(index, item)).toEqual(payload[index].test);
    });
  });

  it(`should return null when given a falsy value`, () => {
    const key = 'test';
    spyOn(Logger, 'warn');

    expect(pipe.transform(key)(1, '')).toEqual(null);
  });

  it(`should should show a console warning when it cannot use the provided key`, () => {
    const key = 'baz';
    const testPayload = [{ id: 1, test: 'foo' }];
    const spy = spyOn(Logger, 'warn');
    testPayload.forEach((item, index) => {
      pipe.transform(key)(index, item);
    });

    expect(spy).toHaveBeenCalled();
  });
});
