import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { SocialLink } from '@/types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: SiGmail,
    href: `mailto:${process.env.EMAIL}`,
    label: 'Email',
  },
  {
    icon: SiGithub,
    href: `https://github.com/${process.env.GITHUB}`,
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: `https://www.linkedin.com/in/${process.env.LINKEDIN}`,
    label: 'LinkedIn',
  },
];
