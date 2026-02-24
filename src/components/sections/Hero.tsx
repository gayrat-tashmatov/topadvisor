'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(46,117,182,0.06)_0%,_transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide section-padding pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block text-xs font-mono font-bold tracking-[0.35em] text-gold-400/80 mb-6 border border-gold-400/20 rounded-full px-4 py-1.5">
              {t('tagline')}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6">
            <span className="block font-display text-display-lg md:text-display-xl font-bold text-white opacity-0 animate-fade-up animation-delay-100">
              {t('title_line1')}
            </span>
            <span className="block font-display text-display-lg md:text-display-xl font-bold text-gradient-gold opacity-0 animate-fade-up animation-delay-200">
              {t('title_line2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gold-300/60 font-display tracking-wide mb-6 opacity-0 animate-fade-up animation-delay-300">
            {t('subtitle')}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/40 leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-up animation-delay-400">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-500">
            <a
              href="#contacts"
              className="group inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold text-sm px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20"
            >
              {t('cta')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#practices"
              className="inline-flex items-center gap-3 border border-white/10 hover:border-white/25 text-white/60 hover:text-white font-medium text-sm px-7 py-4 rounded-xl transition-all duration-300"
            >
              {t('cta_secondary')}
            </a>
          </div>
        </div>

        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <ChevronDown size={24} className="text-white/20 animate-bounce" />
      </div>
    </section>
  );
}
