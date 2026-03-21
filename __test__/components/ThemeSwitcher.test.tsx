import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { useTheme } from 'next-themes';
import ThemeSwitcher from '@/components/ThemeSwitcher';

vi.mock('next-themes');

describe('ThemeSwitcher', () => {
  it('should render moon icon when theme is light', () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      systemTheme: 'light',
      setTheme: vi.fn(),
      themes: ['light', 'dark'],
      forcedTheme: undefined,
      resolvedTheme: 'light',
    } as any);

    render(<ThemeSwitcher />);

    const button = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(button).toBeInTheDocument();
  });

  it('should render sun icon when theme is dark', () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'dark',
      systemTheme: 'dark',
      setTheme: vi.fn(),
      themes: ['light', 'dark'],
      forcedTheme: undefined,
      resolvedTheme: 'dark',
    } as any);

    render(<ThemeSwitcher />);

    const button = screen.getByRole('button', { name: /switch to light mode/i });
    expect(button).toBeInTheDocument();
  });

  it('should toggle theme when clicked', async () => {
    const setThemeMock = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      systemTheme: 'light',
      setTheme: setThemeMock,
      themes: ['light', 'dark'],
      forcedTheme: undefined,
      resolvedTheme: 'light',
    } as any);

    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('should use systemTheme when theme is system', () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'system',
      systemTheme: 'dark',
      setTheme: vi.fn(),
      themes: ['light', 'dark', 'system'],
      forcedTheme: undefined,
      resolvedTheme: 'dark',
    } as any);

    render(<ThemeSwitcher />);

    const button = screen.getByRole('button', { name: /switch to light mode/i });
    expect(button).toBeInTheDocument();
  });
});
