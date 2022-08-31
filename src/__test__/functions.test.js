import * as util from '../utils';

describe('Utility functions', () => {
  test('should change to currency format', () => {
    expect(util.currencyFormatter.format(513229)).toBe('$513,229.00');
  });
  test('should format number with commas', () => {
    expect(util.numberFormat(513229)).toBe('513,229');
  });
});
