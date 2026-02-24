'use client';

import { useTranslations, useLocale } from 'next-intl';
import { siteConfig } from '@/lib/constants';
import { Linkedin, Send, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 border-t border-navy-700">
      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-xl font-bold tracking-[0.15em] text-gold-400 mb-3">
              TOP ADVISOR
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`https://t.me/${siteConfig.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-400/30 transition-all"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Practices */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gold-400/80 uppercase mb-5">
              {t('practices')}
            </h4>
            <ul className="space-y-3">
              <li><a href={`/${locale}/practices#strategy`} className="text-sm text-white/40 hover:text-white transition-colors">Strategy & Advisory</a></li>
              <li><a href={`/${locale}/practices#transformation`} className="text-sm text-white/40 hover:text-white transition-colors">Business Transformation</a></li>
              <li><a href={`/${locale}/practices#legal`} className="text-sm text-white/40 hover:text-white transition-colors">Legal & Regulatory</a></li>
              <li><a href={`/${locale}/practices#government`} className="text-sm text-white/40 hover:text-white transition-colors">Government & Public Sector</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gold-400/80 uppercase mb-5">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: tNav('about') },
                { href: '/team', label: tNav('team') },
                { href: '/projects', label: tNav('projects') },
                { href: '/insights', label: tNav('insights') },
              ].map((link) => (
                <li key={link.href}>
                  <a href={`/${locale}${link.href}`} className="text-sm text-white/40 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gold-400/80 uppercase mb-5">
              {t('contacts')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/40">{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-400/50 mt-0.5 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/40 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-400/50 mt-0.5 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-white/40 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">
            © 2025–{year} TopAdvisor. {t('rights')}.
          </p>
          <a href={`/${locale}/privacy`} className="text-xs text-white/25 hover:text-white/50 transition-colors">
            {t('privacy')}
          </a>
        </div>
      </div>
    </footer>
  );
}
