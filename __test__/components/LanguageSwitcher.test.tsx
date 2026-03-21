import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const { mockUseRouter } = vi.hoisted(() => ({
  mockUseRouter: vi.fn(),
}));

vi.mock('next/router', () => ({
  useRouter: mockUseRouter,
}));

beforeEach(() => {
  mockUseRouter.mockClear();
});

describe('LanguageSwitcher', () => {
  it('should render current locale flag', () => {
    mockUseRouter.mockReturnValue({
      locale: 'en',
      locales: ['en', 'es', 'de', 'it'],
      asPath: '/',
    } as any);

    render(<LanguageSwitcher />);

    const link = screen.getByRole('link', { name: /switch to es/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('🇬🇧');
  });

  it('should link to next locale in the list', () => {
    mockUseRouter.mockReturnValue({
      locale: 'en',
      locales: ['en', 'es', 'de', 'it'],
      asPath: '/about',
    } as any);

    render(<LanguageSwitcher />);

    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link).toHaveAttribute('href', '/about');
  });

  it('should cycle back to first locale when at the end', () => {
    mockUseRouter.mockReturnValue({
      locale: 'it',
      locales: ['en', 'es', 'de', 'it'],
      asPath: '/',
    } as any);

    render(<LanguageSwitcher />);

    const link = screen.getByRole('link', { name: /switch to en/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('🇮🇹');
  });

  it('should use default locale when locale is undefined', () => {
    mockUseRouter.mockReturnValue({
      locale: undefined,
      locales: ['en', 'es', 'de', 'it'],
      asPath: '/',
    } as any);

    render(<LanguageSwitcher />);

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('🇬🇧');
  });

  it('should display correct flag for each locale', () => {
    const locales = [
      { locale: 'en', flag: '🇬🇧' },
      { locale: 'es', flag: '🇪🇸' },
      { locale: 'de', flag: '🇩🇪' },
      { locale: 'it', flag: '🇮🇹' },
    ];

    locales.forEach(({ locale, flag }) => {
      mockUseRouter.mockReturnValue({
        locale,
        locales: ['en', 'es', 'de', 'it'],
        asPath: '/',
      } as any);

      const { container } = render(<LanguageSwitcher />);
      const link = screen.getByRole('link');
      expect(link).toHaveTextContent(flag);
      container.remove();
    });
  });
});
