import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const { mockPush, mockUseRouter } = vi.hoisted(() => ({
  mockPush: vi.fn(),
  mockUseRouter: vi.fn(),
}));

vi.mock('next/router', () => ({
  useRouter: mockUseRouter,
}));

beforeEach(() => {
  mockUseRouter.mockClear();
  mockPush.mockClear();
});

describe('LanguageSwitcher', () => {
  it('should render current locale flag', () => {
    mockUseRouter.mockReturnValue({
      locale: 'en',
      locales: ['en', 'es', 'de', 'it'],
      pathname: '/',
      query: {},
      push: mockPush,
    } as any);

    render(<LanguageSwitcher />);

    const button = screen.getByRole('button', { name: /switch to es/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('🇬🇧');
  });

  it('should call router.push with correct locale when clicked', async () => {
    const user = userEvent.setup();
    mockUseRouter.mockReturnValue({
      locale: 'en',
      locales: ['en', 'es', 'de', 'it'],
      pathname: '/about',
      query: {},
      push: mockPush,
    } as any);

    render(<LanguageSwitcher />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockPush).toHaveBeenCalledWith(
      { pathname: '/about', query: {} },
      undefined,
      { locale: 'es' }
    );
  });

  it('should cycle back to first locale when at the end', () => {
    mockUseRouter.mockReturnValue({
      locale: 'it',
      locales: ['en', 'es', 'de', 'it'],
      pathname: '/',
      query: {},
      push: mockPush,
    } as any);

    render(<LanguageSwitcher />);

    const button = screen.getByRole('button', { name: /switch to en/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('🇮🇹');
  });

  it('should use default locale when locale is undefined', () => {
    mockUseRouter.mockReturnValue({
      locale: undefined,
      locales: ['en', 'es', 'de', 'it'],
      pathname: '/',
      query: {},
      push: mockPush,
    } as any);

    render(<LanguageSwitcher />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('🇬🇧');
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
        pathname: '/',
        query: {},
        push: mockPush,
      } as any);

      const { container } = render(<LanguageSwitcher />);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent(flag);
      container.remove();
    });
  });

  it('should handle query parameters correctly', async () => {
    const user = userEvent.setup();
    mockUseRouter.mockReturnValue({
      locale: 'en',
      locales: ['en', 'es', 'de', 'it'],
      pathname: '/search',
      query: { q: 'test' },
      push: mockPush,
    } as any);

    render(<LanguageSwitcher />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockPush).toHaveBeenCalledWith(
      { pathname: '/search', query: { q: 'test' } },
      undefined,
      { locale: 'es' }
    );
  });
});
