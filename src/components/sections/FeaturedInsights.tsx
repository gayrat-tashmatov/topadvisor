'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Clock } from 'lucide-react';

// TODO: Replace with real data from markdown/CMS
const sampleInsights = [
  {
    slug: 'tax-code-changes-2026',
    type: 'digest',
    date: '2026-02-24',
    readTime: '5 мин',
    titleRu: 'Изменения в Налоговом кодексе: новые ставки НДС для IT-компаний',
    titleEn: 'Tax Code Changes: New VAT Rates for IT Companies',
    excerptRu: 'Анализ ключевых изменений и рекомендации для бизнеса.',
    excerptEn: 'Analysis of key changes and business recommendations.',
  },
  {
    slug: 'solar-energy-incentives',
    type: 'article',
    date: '2026-02-20',
    readTime: '8 мин',
    titleRu: 'Постановление о льготах для солнечной энергетики',
    titleEn: 'Solar Energy Incentives: New Government Resolution',
    excerptRu: 'Обзор нового постановления и возможности для инвесторов.',
    excerptEn: 'Overview of new resolution and investor opportunities.',
  },
  {
    slug: 'ppp-tourism-requirements',
    type: 'article',
    date: '2026-02-15',
    readTime: '6 мин',
    titleRu: 'Новые требования к ГЧП-проектам в сфере туризма',
    titleEn: 'New PPP Requirements in Tourism Sector',
    excerptRu: 'Что изменилось и как адаптировать проекты.',
    excerptEn: 'What changed and how to adapt your projects.',
  },
];

const typeColors = {
  digest: 'bg-red-500/10 text-red-400',
  article: 'bg-accent-blue/10 text-accent-blue',
  report: 'bg-green-500/10 text-green-400',
};

export function FeaturedInsights() {
  const t = useTranslations('insights');
  const locale = useLocale();

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-wide section-padding">
        {/* Section header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/60 block mb-3">
              {t('section_tag')}
            </span>
            <h2 className="font-display text-display-sm md:text-display-md font-bold text-white">
              {t('title')}
            </h2>
          </div>
          <a
            href={`/${locale}/insights`}
            className="hidden md:inline-flex items-center gap-2 text-sm text-gold-400/60 hover:text-gold-400 transition-colors"
          >
            {t('view_all')}
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sampleInsights.map((insight, i) => (
            <a
              key={insight.slug}
              href={`/${locale}/insights/${insight.slug}`}
              className="group glass-card p-6 hover:border-gold-400/20 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Type + date */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-2xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${typeColors[insight.type as keyof typeof typeColors]}`}>
                  {t(insight.type)}
                </span>
                <span className="text-2xs text-white/20">{insight.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors mb-3 leading-snug">
                {locale === 'en' ? insight.titleEn : insight.titleRu}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-white/30 leading-relaxed mb-5 flex-1">
                {locale === 'en' ? insight.excerptEn : insight.excerptRu}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                <div className="flex items-center gap-1.5 text-2xs text-white/20">
                  <Clock size={12} />
                  {insight.readTime}
                </div>
                <span className="text-xs font-semibold text-gold-400/50 group-hover:text-gold-400 transition-colors">
                  {t('read_more')} →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="md:hidden mt-8 text-center">
          <a
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 text-sm text-gold-400/60"
          >
            {t('view_all')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
