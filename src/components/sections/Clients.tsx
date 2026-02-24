'use client';

import { useTranslations } from 'next-intl';
import { clients } from '@/lib/constants';

export function Clients() {
  const t = useTranslations('clients');

  // Duplicate for infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-wide section-padding mb-10">
        <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/60 block mb-3">
          {t('section_tag')}
        </span>
        <h2 className="font-display text-display-sm font-bold text-white">
          {t('title')}
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900 to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubledClients.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16"
            >
              {/* TODO: Replace with actual logo images */}
              {/* <Image src={`/images/clients/${client.toLowerCase()}.png`} ... /> */}
              <span className="text-xl md:text-2xl font-display font-bold text-white/15 hover:text-white/30 transition-colors duration-500 whitespace-nowrap tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
