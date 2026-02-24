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

  // Hero is dark, so header starts transparent-on-dark, then becomes white
  const isTop = !scrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-navy-100/40 py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-wide section-padding flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="flex flex-col">
          <span className={cn(
            "font-display text-xl font-bold tracking-[0.15em] transition-colors duration-500",
            isTop ? "text-gold-400" : "text-navy-500"
          )}>
            TOP ADVISOR
          </span>
          <span className={cn(
            "text-[10px] tracking-[0.3em] uppercase -mt-0.5 transition-colors duration-500",
            isTop ? "text-white/30" : "text-navy-300"
          )}>
            Consulting
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={`/${locale}${link.href}`}
              className={cn(
                "text-sm transition-colors duration-300 tracking-wide",
                isTop ? "text-white/60 hover:text-white" : "text-navy-400 hover:text-navy-700"
              )}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Right side */}
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
                    ? isTop ? 'text-gold-400 bg-gold-400/10 font-bold' : 'text-gold-500 bg-gold-400/10 font-bold'
                    : isTop ? 'text-white/30 hover:text-white/60' : 'text-navy-300 hover:text-navy-500'
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`/${locale}/contacts`}
            className="text-sm font-semibold text-white bg-navy-500 hover:bg-navy-600 px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-navy-500/15"
          >
            {t('consultation')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden transition-colors", isTop ? "text-white/60" : "text-navy-500")}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-navy-100/40 shadow-lg">
          <nav className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                className="text-lg text-navy-500 hover:text-navy-700 py-2 border-b border-navy-50"
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
                      ? 'text-gold-500 bg-gold-400/10 font-bold'
                      : 'text-navy-300 bg-navy-50'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href={`/${locale}/contacts`}
              className="mt-2 text-center text-sm font-semibold text-white bg-navy-500 px-5 py-3 rounded-lg"
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
