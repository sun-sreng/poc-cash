import { describe, expect, it } from 'vitest';
import { formatDateDuration } from './format-date';

describe('formatDateDuration', () => {
  it('should return correct duration in days for less than a week', () => {
    const startDate = new Date(2024, 10, 1); // Nov 1, 2024
    const endDate = new Date(2024, 10, 4); // Nov 4, 2024
    expect(formatDateDuration(startDate, endDate)).toBe('3 days');
  });

  it("should return singular 'day' for 1 day difference", () => {
    const startDate = new Date(2024, 10, 1);
    const endDate = new Date(2024, 10, 2);
    expect(formatDateDuration(startDate, endDate)).toBe('1 day');
  });

  it('should return correct duration in weeks for less than a month', () => {
    const startDate = new Date(2024, 10, 1);
    const endDate = new Date(2024, 10, 22); // 3 weeks later
    expect(formatDateDuration(startDate, endDate)).toBe('3 weeks');
  });

  it('should return correct duration in months for less than a year', () => {
    const startDate = new Date(2024, 0, 1); // Jan 1, 2024
    const endDate = new Date(2024, 5, 1); // Jun 1, 2024
    expect(formatDateDuration(startDate, endDate)).toBe('5 months');
  });

  it("should return singular 'month' for 1 month difference", () => {
    const startDate = new Date(2024, 0, 1);
    const endDate = new Date(2024, 1, 1); // Feb 1, 2024
    expect(formatDateDuration(startDate, endDate)).toBe('1 month');
  });

  it('should return correct duration in years for more than a year', () => {
    const startDate = new Date(2020, 0, 1); // Jan 1, 2020
    const endDate = new Date(2023, 0, 1); // Jan 1, 2023
    expect(formatDateDuration(startDate, endDate)).toBe('3 years');
  });

  it("should return singular 'year' for 1 year difference", () => {
    const startDate = new Date(2023, 0, 1); // Jan 1, 2023
    const endDate = new Date(2024, 0, 1); // Jan 1, 2024
    expect(formatDateDuration(startDate, endDate)).toBe('1 year');
  });

  it('should handle edge cases like no difference', () => {
    const startDate = new Date(2024, 10, 1);
    const endDate = new Date(2024, 10, 1); // Same day
    expect(formatDateDuration(startDate, endDate)).toBe('0 days');
  });
});
