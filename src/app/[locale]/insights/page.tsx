import { Clock, ArrowRight } from 'lucide-react';

const insights = [
  { slug: 'tax-code-changes-2026', type: 'digest', date: '24 февраля 2026', readTime: '5 мин', title: 'Изменения в Налоговом кодексе: новые ставки НДС для IT-компаний', excerpt: 'Правительство утвердило изменения в ставках НДС для IT-компаний — резидентов IT Park. Анализ влияния на бизнес и рекомендации.' },
  { slug: 'solar-energy-incentives', type: 'article', date: '20 февраля 2026', readTime: '8 мин', title: 'Постановление о льготах для солнечной энергетики', excerpt: 'Новое постановление открывает возможности для инвесторов в солнечную энергетику. Обзор льгот, требований и перспектив.' },
  { slug: 'ppp-tourism-requirements', type: 'article', date: '15 февраля 2026', readTime: '6 мин', title: 'Новые требования к ГЧП-проектам в сфере туризма', excerpt: 'Кабинет Министров обновил требования к проектам ГЧП в туристической отрасли. Что изменилось и как адаптировать проекты.' },
  { slug: 'weekly-digest-w7', type: 'digest', date: '17 февраля 2026', readTime: '4 мин', title: 'Еженедельный дайджест: 10–16 февраля 2026', excerpt: '5 ключевых изменений в законодательстве за неделю. Налоги, трудовое право, энергетика.' },
  { slug: 'data-protection-update', type: 'article', date: '10 февраля 2026', readTime: '7 мин', title: 'Закон о персональных данных: что нужно знать бизнесу', excerpt: 'Обновлённые требования к обработке персональных данных в Узбекистане. Checklist для compliance.' },
  { slug: 'esco-market-overview', type: 'report', date: '5 февраля 2026', readTime: '12 мин', title: 'Рынок энергосервисных контрактов в Узбекистане: обзор 2025', excerpt: 'Годовой отчёт: текущее состояние, регуляторная база, ключевые игроки и прогноз на 2026.' },
  { slug: 'weekly-digest-w6', type: 'digest', date: '10 февраля 2026', readTime: '4 мин', title: 'Еженедельный дайджест: 3–9 февраля 2026', excerpt: 'Изменения в таможенном регулировании, обновления по свободным экономическим зонам.' },
  { slug: 'ip-registration-guide', type: 'article', date: '1 февраля 2026', readTime: '10 мин', title: 'Гайд: регистрация товарных знаков в Узбекистане', excerpt: 'Пошаговое руководство по регистрации товарных знаков. Сроки, стоимость, подводные камни.' },
];

const typeColors: Record<string, string> = {
  digest: 'bg-red-50 text-red-600',
  article: 'bg-blue-50 text-blue-600',
  report: 'bg-green-50 text-green-600',
};

const typeLabels: Record<string, string> = {
  digest: 'Дайджест',
  article: 'Аналитика',
  report: 'Отчёт',
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
        <div className="relative container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/70 block mb-4">INSIGHTS</span>
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-white mb-4">Аналитика и обзоры</h1>
          <p className="text-lg text-white/40 max-w-xl">
            Дайджесты законодательства, аналитические статьи и отраслевые отчёты.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container-wide section-padding">
          {/* Featured */}
          <div className="mb-12 group">
            <a href="#" className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-stone-50 rounded-2xl border border-navy-100/40 p-8 hover:shadow-lg hover:border-gold-400/30 transition-all">
              <div className="flex flex-col justify-center">
                <span className={`text-2xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${typeColors[insights[0].type]} w-fit mb-4`}>
                  {typeLabels[insights[0].type]}
                </span>
                <h2 className="font-display text-2xl font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-3">
                  {insights[0].title}
                </h2>
                <p className="text-navy-400 leading-relaxed mb-4">{insights[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-navy-300">
                  <span>{insights[0].date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {insights[0].readTime}</span>
                </div>
              </div>
              <div className="h-48 md:h-auto rounded-xl bg-gradient-to-br from-navy-100 to-gold-100/30 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(1).map((item, i) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="group bg-white rounded-2xl border border-navy-100/60 p-6 hover:shadow-lg hover:border-gold-400/30 transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-2xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${typeColors[item.type]}`}>
                    {typeLabels[item.type]}
                  </span>
                  <span className="text-2xs text-navy-300">{item.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed mb-5 flex-1">{item.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-navy-50">
                  <span className="flex items-center gap-1.5 text-2xs text-navy-300"><Clock size={12} /> {item.readTime}</span>
                  <span className="text-xs font-semibold text-gold-400 group-hover:text-gold-500">Читать →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
