'use client';

import { useTranslations, useLocale } from 'next-intl';
import { TrendingUp, Cog, Scale, Landmark, ArrowUpRight } from 'lucide-react';

const icons = {
  strategy: TrendingUp,
  transformation: Cog,
  legal: Scale,
  government: Landmark,
};

const practiceKeys = ['strategy', 'transformation', 'legal', 'government'] as const;

export function Practices() {
  const t = useTranslations('practices');
  const locale = useLocale();

  return (
    <section id="practices" className="relative py-24 md:py-32 bg-stone-50">
      <div className="container-wide section-padding">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-3">
            {t('section_tag')}
          </span>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-navy-800">
            {t('title')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {practiceKeys.map((key, i) => {
            const Icon = icons[key];
            return (
              <a
                key={key}
                href={`/${locale}/practices#${key}`}
                className="group relative bg-white rounded-2xl border border-navy-100/60 p-7 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-gold-400/60 via-gold-400/20 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-navy-500/5 flex items-center justify-center mb-5 group-hover:bg-gold-400/10 transition-colors">
                  <Icon size={22} className="text-navy-500 group-hover:text-gold-500 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {t(`${key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-sm text-navy-400 leading-relaxed mb-5">
                  {t(`${key}.description`)}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:text-gold-500 transition-colors">
                  {t('learn_more')}
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
