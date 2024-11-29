import { describe, expect, it } from 'vitest';
import { formatNumber } from './format-number';

describe('formatNumber', () => {
  it('should format small numbers without compact notation', () => {
    expect(formatNumber(123)).toBe('123');
    expect(formatNumber(999)).toBe('999');
  });

  it('should format thousands with compact notation', () => {
    expect(formatNumber(1000)).toBe('1K');
    expect(formatNumber(2500)).toBe('2.5K');
    expect(formatNumber(9999)).toBe('10K');
  });

  it('should format millions with compact notation', () => {
    expect(formatNumber(1_000_000)).toBe('1M');
    expect(formatNumber(2_500_000)).toBe('2.5M');
    expect(formatNumber(999_999_999)).toBe('1B'); // Edge case: close to a billion
  });

  it('should format billions with compact notation', () => {
    expect(formatNumber(1_000_000_000)).toBe('1B');
    expect(formatNumber(2_500_000_000)).toBe('2.5B');
  });

  it('should format edge cases like zero', () => {
    expect(formatNumber(0)).toBe('0');
  });

  it('should format negative numbers correctly', () => {
    expect(formatNumber(-1234)).toBe('-1.2K');
    expect(formatNumber(-1_000_000)).toBe('-1M');
  });

  it('should handle very large numbers (trillions)', () => {
    expect(formatNumber(1_000_000_000_000)).toBe('1T');
    expect(formatNumber(2_500_000_000_000)).toBe('2.5T');
  });
});
