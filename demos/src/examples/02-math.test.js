const { sum, multiply, divide } = require('./02-math');

describe('Test For Math', () => {
  describe('Test For Sum', () => {
    test('add 1 + 3 should be four', () => {
      const resp = sum(1, 3);
      expect(resp).toBe(4);
    });

    test('adds test', () => {
      const resp = sum(1, 2);
      expect(resp).toBe(3);
    });
  });
  describe('Test For multiply', () => {
    test('multiply test', () => {
      const resp = multiply(6, 6);
      expect(resp).toBe(36);
    });
  });
  describe('Test For divide', () => {
    test('divide  test', () => {
      const resp = divide(6, 2);
      expect(resp).toBe(3);
    });

    test('divide  test zero', () => {
      const resp = divide(6, 0);
      expect(resp).toBeNull();
    });
  });
});
