import {add} from './math.js';

describe('Math', () => {
  describe('add', () => {
    test('legger sammen to tall', () => {
      const result = add(1,1);
      expect(result).toEqual(2);
      expect(result).toBeLessThan(3);
      expect(result).toBeGreaterThan(1);
    });
  });
});
