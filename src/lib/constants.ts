export const siteConfig = {
  name: 'TopAdvisor',
  url: 'https://topadvisor.biz',
  email: 'info@topadvisor.biz',
  phone: '+998 XX XXX XX XX',
  address: 'Ташкент, Узбекистан',
  telegram: '@topadvisor_insights',
  linkedin: 'https://linkedin.com/company/topadvisor',
};

export const practices = [
  {
    id: 'strategy',
    icon: 'TrendingUp',
    href: '/practices#strategy',
  },
  {
    id: 'transformation',
    icon: 'Cog',
    href: '/practices#transformation',
  },
  {
    id: 'legal',
    icon: 'Scale',
    href: '/practices#legal',
  },
  {
    id: 'government',
    icon: 'Landmark',
    href: '/practices#government',
  },
] as const;

export const stats = [
  { value: 50, suffix: '+', key: 'projects' },
  { value: 10, suffix: '+', key: 'experts' },
  { value: 4, suffix: '', key: 'practices' },
  { value: 7, suffix: '+', key: 'years' },
] as const;

export const clients = [
  'Toyota',
  'Binance',
  'IHG Hotels',
  'Artel',
  'Plug and Play',
  'Norma',
  // Добавляйте логотипы клиентов:
  // { name: 'Toyota', logo: '/images/clients/toyota.png' },
] as const;

export const navLinks = [
  { href: '/practices', key: 'practices' },
  { href: '/projects', key: 'projects' },
  { href: '/insights', key: 'insights' },
  { href: '/team', key: 'team' },
  { href: '/about', key: 'about' },
  { href: '/contacts', key: 'contacts' },
] as const;
