export interface WindowSize {
  width: number;
  height: number;
}

export interface NavLink {
  title: string;
  link: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

export interface LocaleFlag {
  icon: string;
}

export type Locale = 'en' | 'es' | 'de' | 'it';
