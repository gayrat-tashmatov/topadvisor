'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/constants';

const locales = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'uz', label: 'UZ' },
];

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  function switchLocale(newLocale: string) {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-wide section-padding flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-[0.15em] text-gold-400">
            TOP ADVISOR
          </span>
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase -mt-0.5">
            Consulting
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={`/${locale}${link.href}`}
              className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Right side: Lang + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={cn(
                  'text-xs font-mono px-2 py-1 rounded transition-all duration-200',
                  locale === l.code
                    ? 'text-gold-400 bg-gold-400/10 font-bold'
                    : 'text-white/30 hover:text-white/60'
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`/${locale}/contacts`}
            className="text-sm font-semibold text-navy-900 bg-gold-400 hover:bg-gold-300 px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20"
          >
            {t('consultation')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white/60 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/[0.06]">
          <nav className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                className="text-lg text-white/70 hover:text-white py-2 border-b border-white/[0.04]"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { switchLocale(l.code); setMobileOpen(false); }}
                  className={cn(
                    'text-sm font-mono px-4 py-2 rounded-lg',
                    locale === l.code
                      ? 'text-gold-400 bg-gold-400/10 font-bold'
                      : 'text-white/30 bg-white/[0.03]'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href={`/${locale}/contacts`}
              className="mt-2 text-center text-sm font-semibold text-navy-900 bg-gold-400 px-5 py-3 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {t('consultation')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
