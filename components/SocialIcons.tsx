import Link from 'next/link';
import { SOCIAL_LINKS } from '@/constants/social';

const SocialIcons = () => {
  return (
    <div className='flex gap-8 w-min pointer-events-auto'>
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          className='hover:scale-110'
          aria-label={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <Icon size={24} />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;