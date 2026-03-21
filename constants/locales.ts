import { Locale, LocaleFlag } from '@/types';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'es', 'de', 'it'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_FLAGS: Record<Locale, LocaleFlag> = {
  es: { icon: '🇪🇸' },
  en: { icon: '🇬🇧' },
  it: { icon: '🇮🇹' },
  de: { icon: '🇩🇪' },
};
