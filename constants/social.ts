import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { SocialLink } from '@/types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: SiGmail,
    href: 'mailto:agustin@spaccesi.com',
    label: 'Email',
  },
  {
    icon: SiGithub,
    href: 'https://github.com/AgustinSRG',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/agustin-spaccesi',
    label: 'LinkedIn',
  },
];
