import { describe, it, expect } from 'vitest';
import { SOCIAL_LINKS } from '@/constants/social';

describe('Social Constants', () => {
  describe('SOCIAL_LINKS', () => {
    it('should have at least one social link', () => {
      expect(SOCIAL_LINKS.length).toBeGreaterThan(0);
    });

    it('should have all required properties for each link', () => {
      SOCIAL_LINKS.forEach((link) => {
        expect(link).toHaveProperty('icon');
        expect(link).toHaveProperty('href');
        expect(link).toHaveProperty('label');
        expect(typeof link.icon).toBe('function');
        expect(typeof link.href).toBe('string');
        expect(typeof link.label).toBe('string');
      });
    });

    it('should have valid href URLs', () => {
      SOCIAL_LINKS.forEach((link) => {
        expect(link.href).toBeTruthy();
        expect(
          link.href.startsWith('http') ||
            link.href.startsWith('mailto:') ||
            link.href.startsWith('/')
        ).toBe(true);
      });
    });

    it('should have unique labels', () => {
      const labels = SOCIAL_LINKS.map((link) => link.label);
      const uniqueLabels = new Set(labels);
      expect(labels.length).toBe(uniqueLabels.size);
    });

    it('should contain expected social platforms', () => {
      const labels = SOCIAL_LINKS.map((link) => link.label);
      expect(labels).toContain('Email');
      expect(labels).toContain('GitHub');
      expect(labels).toContain('LinkedIn');
    });

    it('should have valid email link', () => {
      const emailLink = SOCIAL_LINKS.find((link) => link.label === 'Email');
      expect(emailLink).toBeDefined();
      expect(emailLink?.href).toMatch(/^mailto:/);
    });

    it('should have valid GitHub link', () => {
      const githubLink = SOCIAL_LINKS.find((link) => link.label === 'GitHub');
      expect(githubLink).toBeDefined();
      expect(githubLink?.href).toMatch(/^https:\/\/github\.com\//);
    });

    it('should have valid LinkedIn link', () => {
      const linkedinLink = SOCIAL_LINKS.find((link) => link.label === 'LinkedIn');
      expect(linkedinLink).toBeDefined();
      expect(linkedinLink?.href).toMatch(/^https:\/\/www\.linkedin\.com\//);
    });
  });
});
