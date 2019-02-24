import { getDateSuffix, getMonthName, getDayWithSuffix } from './date';

describe('Date helper', () => {
  describe('getDateSuffix', () => {
    it('should return "st" when passed 1', () => {
      expect(getDateSuffix(1)).toBe('st');
    });
    it('should return "th" when passed 11', () => {
      expect(getDateSuffix(11)).toBe('th');
    });
    it('should return "st" when passed 21', () => {
      expect(getDateSuffix(21)).toBe('st');
    });
    it('should return "nd" when passed 2', () => {
      expect(getDateSuffix(2)).toBe('nd');
    });
    it('should return "th" when passed 12', () => {
      expect(getDateSuffix(12)).toBe('th');
    });
    it('should return "nd" when passed 22', () => {
      expect(getDateSuffix(22)).toBe('nd');
    });
    it('should return "rd" when passed 3', () => {
      expect(getDateSuffix(3)).toBe('rd');
    });
    it('should return "th" when passed 13', () => {
      expect(getDateSuffix(13)).toBe('th');
    });
    it('should return "rd" when passed 23', () => {
      expect(getDateSuffix(23)).toBe('rd');
    });
    it('should return "th" when passed 4-9', () => {
      expect(getDateSuffix(4)).toBe('th');
      expect(getDateSuffix(5)).toBe('th');
      expect(getDateSuffix(6)).toBe('th');
      expect(getDateSuffix(7)).toBe('th');
      expect(getDateSuffix(8)).toBe('th');
      expect(getDateSuffix(9)).toBe('th');
    });
    it('should return "th" when passed 24-29', () => {
      expect(getDateSuffix(24)).toBe('th');
      expect(getDateSuffix(25)).toBe('th');
      expect(getDateSuffix(26)).toBe('th');
      expect(getDateSuffix(27)).toBe('th');
      expect(getDateSuffix(28)).toBe('th');
      expect(getDateSuffix(29)).toBe('th');
    });
  });
  describe('getMonthName', () => {
    it('should always return a string from a date', () => {
      expect.assertions(15);

      for (let i = 0; i < 15; i++) {
        expect(typeof getMonthName(new Date(2000, i))).toBe('string');
      }
    });
  });
  describe('getDayWithSuffix', () => {
    it('correctly formats a date', () => {
      expect(getDayWithSuffix(new Date(2000, 6, 5))).toEqual('5th');
    });
    it('throws an error when passed invalid date', () => {
      try {
        getDayWithSuffix('potato');
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });
  });
});
