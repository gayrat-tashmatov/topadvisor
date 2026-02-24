'use client';

import { useTranslations } from 'next-intl';
import { Send, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container-wide section-padding">
        <div className="relative rounded-3xl p-10 md:p-14 overflow-hidden bg-navy-800">
          {/* Background accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.1)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(46,117,182,0.08)_0%,_transparent_60%)]" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gold-400/15 flex items-center justify-center mx-auto mb-6">
              <Send size={24} className="text-gold-400" />
            </div>

            <h2 className="font-display text-display-sm md:text-display-md font-bold text-white mb-4">
              {t('title')}
            </h2>

            <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Email form */}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо за подписку! / Thank you for subscribing!');
              }}
            >
              <input
                type="email"
                required
                placeholder={t('placeholder')}
                className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-400/50 transition-colors"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20"
              >
                {t('button')}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            {/* Telegram link */}
            <a
              href={`https://t.me/${siteConfig.telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/35 hover:text-gold-400/70 transition-colors"
            >
              <Send size={14} />
              {t('telegram')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
