import { describe, it, expect } from 'vitest';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, LOCALE_FLAGS } from '@/constants/locales';

describe('Locales Constants', () => {
  describe('SUPPORTED_LOCALES', () => {
    it('should contain all supported locales', () => {
      expect(SUPPORTED_LOCALES).toEqual(['en', 'es', 'de', 'it']);
    });

    it('should have at least one locale', () => {
      expect(SUPPORTED_LOCALES.length).toBeGreaterThan(0);
    });
  });

  describe('DEFAULT_LOCALE', () => {
    it('should be en', () => {
      expect(DEFAULT_LOCALE).toBe('en');
    });

    it('should be included in supported locales', () => {
      expect(SUPPORTED_LOCALES).toContain(DEFAULT_LOCALE);
    });
  });

  describe('LOCALE_FLAGS', () => {
    it('should have flags for all supported locales', () => {
      SUPPORTED_LOCALES.forEach((locale) => {
        expect(LOCALE_FLAGS[locale]).toBeDefined();
        expect(LOCALE_FLAGS[locale].icon).toBeDefined();
      });
    });

    it('should have correct flag icons', () => {
      expect(LOCALE_FLAGS.en.icon).toBe('🇬🇧');
      expect(LOCALE_FLAGS.es.icon).toBe('🇪🇸');
      expect(LOCALE_FLAGS.de.icon).toBe('🇩🇪');
      expect(LOCALE_FLAGS.it.icon).toBe('🇮🇹');
    });

    it('should only contain supported locales', () => {
      const flagKeys = Object.keys(LOCALE_FLAGS).sort();
      const supportedLocales = [...SUPPORTED_LOCALES].sort();
      expect(flagKeys).toEqual(supportedLocales);
    });
  });
});
