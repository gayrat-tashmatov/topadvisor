import { TrendingUp, Cog, Scale, Landmark, ArrowRight, CheckCircle } from 'lucide-react';

const practicesData = [
  {
    id: 'strategy',
    icon: TrendingUp,
    title: 'Strategy & Advisory',
    subtitle: 'Стратегическое планирование и инвестиционный консалтинг',
    description: 'Помогаем компаниям и инвесторам принимать обоснованные решения о входе на рынок, расширении бизнеса и партнёрстве в Центральной Азии.',
    services: [
      'Market Entry Strategy — анализ рынка, конкурентной среды, регуляторных барьеров',
      'Инвестиционный консалтинг — due diligence, оценка проектов, структурирование сделок',
      'ГЧП (государственно-частное партнёрство) — подготовка и сопровождение проектов',
      'Стратегическое планирование — разработка стратегий развития для компаний и регионов',
      'Привлечение финансирования — подготовка заявок в МФО (EBRD, IFC, ADB)',
    ],
    cases: [
      { client: 'Международный гостиничный оператор', result: 'Успешный вход на рынок Узбекистана, подписание управляющего контракта' },
      { client: 'Европейский инвестиционный фонд', result: 'Due diligence 5 проектов в энергетическом секторе, $50M+ потенциальных инвестиций' },
    ],
  },
  {
    id: 'transformation',
    icon: Cog,
    title: 'Business Transformation',
    subtitle: 'Реинжиниринг и цифровая трансформация',
    description: 'Оптимизируем бизнес-процессы и помогаем компаниям адаптироваться к новым реалиям рынка через системные изменения.',
    services: [
      'BPM — моделирование, анализ и оптимизация бизнес-процессов',
      'Организационный дизайн — реструктуризация, новые модели управления',
      'Цифровая трансформация — автоматизация, внедрение IT-решений',
      'Операционная эффективность — сокращение издержек, повышение производительности',
      'Change Management — управление изменениями, обучение команд',
    ],
    cases: [
      { client: 'Крупный производственный холдинг', result: 'Реинжиниринг 12 ключевых процессов, сокращение цикла на 35%' },
    ],
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal & Regulatory',
    subtitle: 'Юридическая экспертиза и регуляторное сопровождение',
    description: 'Обеспечиваем правовую защиту бизнеса и помогаем навигировать быстро меняющийся регуляторный ландшафт Узбекистана.',
    services: [
      'IP-менеджмент — регистрация, защита и монетизация интеллектуальной собственности',
      'Compliance — разработка и внедрение программ соответствия',
      'Защита персональных данных — аудит, политики, соответствие законодательству',
      'Трудовое право — трудовые договоры, разрешения, разрешение споров',
      'Корпоративное право — создание юрлиц, M&A, корпоративное управление',
    ],
    cases: [
      { client: 'Технологическая компания (Fortune 500)', result: 'Регистрация 15+ товарных знаков, защита IP-портфеля в Центральной Азии' },
      { client: 'Финтех-стартап', result: 'Полное регуляторное сопровождение выхода на рынок Узбекистана' },
    ],
  },
  {
    id: 'government',
    icon: Landmark,
    title: 'Government & Public Sector',
    subtitle: 'Международные проекты и работа с государственным сектором',
    description: 'Координируем масштабные проекты развития с участием международных финансовых институтов и государственных органов.',
    services: [
      'Проекты EBRD, EU, World Bank — координация, экспертная поддержка',
      'Разработка государственных программ — стратегии развития регионов и отраслей',
      'Институциональное развитие — усиление потенциала государственных органов',
      'Энергетика и устойчивое развитие — ESCO, энергоэффективность, зелёное финансирование',
      'Мониторинг и оценка — M&E проектов развития',
    ],
    cases: [
      { client: 'Европейский Союз (SECCA)', result: 'Координация регионального проекта по устойчивой энергетике в Центральной Азии' },
      { client: 'EBRD', result: 'Создание Единой инвестиционной платформы Узбекистана' },
    ],
  },
];

export default function PracticesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
        <div className="relative container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/70 block mb-4">PRACTICES</span>
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-white mb-4">
            Направления экспертизы
          </h1>
          <p className="text-lg text-white/40 max-w-2xl">
            Четыре практики, объединённые общей целью — помогать бизнесу расти на динамичных рынках Центральной Азии.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-[64px] z-30 bg-white border-b border-navy-100/60 shadow-sm">
        <div className="container-wide section-padding">
          <div className="flex gap-1 overflow-x-auto py-3 -mx-2">
            {practicesData.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-navy-500 hover:bg-stone-50 hover:text-navy-700 transition-all whitespace-nowrap"
              >
                <p.icon size={16} className="text-gold-400" />
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Practice sections */}
      {practicesData.map((practice, idx) => (
        <section
          key={practice.id}
          id={practice.id}
          className={`py-16 md:py-24 ${idx % 2 === 1 ? 'bg-stone-50' : 'bg-white'}`}
        >
          <div className="container-wide section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left - Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center">
                    <practice.icon size={26} className="text-gold-500" />
                  </div>
                  <div>
                    <h2 className="font-display text-display-sm font-bold text-navy-800">{practice.title}</h2>
                    <p className="text-sm text-navy-400">{practice.subtitle}</p>
                  </div>
                </div>

                <p className="text-navy-500 leading-relaxed mb-8">
                  {practice.description}
                </p>

                {/* Services */}
                <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-gold-400 mb-4">УСЛУГИ</h3>
                <ul className="space-y-3 mb-8">
                  {practice.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-600 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Cases */}
              <div className="lg:col-span-5">
                <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-gold-400 mb-4">КЕЙСЫ</h3>
                <div className="space-y-4">
                  {practice.cases.map((c, i) => (
                    <div key={i} className="bg-white rounded-xl border border-navy-100/60 p-5 shadow-sm">
                      <p className="text-sm font-semibold text-navy-700 mb-2">{c.client}</p>
                      <p className="text-sm text-navy-400 leading-relaxed">{c.result}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/contacts"
                  className="group mt-6 flex items-center justify-between p-5 rounded-xl bg-navy-800 text-white hover:bg-navy-700 transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold">Обсудить проект</p>
                    <p className="text-xs text-white/40">в области {practice.title}</p>
                  </div>
                  <ArrowRight size={18} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
