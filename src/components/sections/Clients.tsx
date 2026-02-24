'use client';

import { useTranslations } from 'next-intl';
import { clients } from '@/lib/constants';

export function Clients() {
  const t = useTranslations('clients');
  const doubledClients = [...clients, ...clients];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-stone-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent" />

      <div className="container-wide section-padding mb-10">
        <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-3">
          {t('section_tag')}
        </span>
        <h2 className="font-display text-display-sm font-bold text-navy-800">
          {t('title')}
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubledClients.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16"
            >
              <span className="text-xl md:text-2xl font-display font-bold text-navy-200 hover:text-navy-400 transition-colors duration-500 whitespace-nowrap tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent" />
    </section>
  );
}
