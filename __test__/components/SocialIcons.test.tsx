import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SocialIcons from '@/components/SocialIcons';
import { SOCIAL_LINKS } from '@/constants/social';

describe('SocialIcons', () => {
  it('should render all social links', () => {
    render(<SocialIcons />);

    SOCIAL_LINKS.forEach((link) => {
      const anchor = screen.getByRole('link', { name: link.label });
      expect(anchor).toBeInTheDocument();
    });
  });

  it('should have correct href attributes', () => {
    render(<SocialIcons />);

    SOCIAL_LINKS.forEach((link) => {
      const anchor = screen.getByRole('link', { name: link.label });
      expect(anchor).toHaveAttribute('href', link.href);
    });
  });

  it('should have correct aria-labels', () => {
    render(<SocialIcons />);

    SOCIAL_LINKS.forEach((link) => {
      const anchor = screen.getByRole('link', { name: link.label });
      expect(anchor).toHaveAttribute('aria-label', link.label);
    });
  });

  it('should open external links in new tab', () => {
    render(<SocialIcons />);

    SOCIAL_LINKS.forEach((link) => {
      const anchor = screen.getByRole('link', { name: link.label });
      if (link.href.startsWith('http')) {
        expect(anchor).toHaveAttribute('target', '_blank');
        expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
      } else {
        expect(anchor).not.toHaveAttribute('target');
        expect(anchor).not.toHaveAttribute('rel');
      }
    });
  });

  it('should have hover scale effect class', () => {
    const { container } = render(<SocialIcons />);

    const links = container.querySelectorAll('a');
    links.forEach((link) => {
      expect(link.className).toContain('hover:scale-110');
    });
  });
});
