import { Landmark, Globe, Users, Target, Award, TrendingUp } from 'lucide-react';

const milestones = [
  { year: '2018', title: 'Основание', desc: 'Создание TopAdvisor как юридической и консалтинговой фирмы в Ташкенте' },
  { year: '2019', title: 'Первые международные проекты', desc: 'Начало работы с EBRD и международными инвесторами' },
  { year: '2020', title: 'Расширение практик', desc: 'Запуск направлений IP-менеджмента и Business Transformation' },
  { year: '2021', title: 'Крупные клиенты', desc: 'Toyota, IHG Hotels, Binance — выход на работу с международными корпорациями' },
  { year: '2022', title: 'EU проекты', desc: 'Участие в проектах Европейского Союза в Центральной Азии' },
  { year: '2023', title: 'SECCA и энергетика', desc: 'Ключевая роль в проектах устойчивой энергетики в регионе' },
  { year: '2024', title: 'Стратегическая трансформация', desc: 'Переход к модели стратегического консалтинга международного уровня' },
  { year: '2025', title: 'Цифровая платформа', desc: 'Запуск системы мониторинга законодательства и аналитической платформы' },
];

const values = [
  { icon: Target, title: 'Глубокая экспертиза', desc: 'Мы не берёмся за всё подряд. Фокусируемся на том, в чём разбираемся лучше всех — стратегия, право и международные проекты в Центральной Азии.' },
  { icon: Globe, title: 'Мост между мирами', desc: 'Соединяем международные стандарты с локальной реальностью. Понимаем и западных инвесторов, и узбекскую специфику.' },
  { icon: Award, title: 'Репутация прежде всего', desc: 'Наша репутация — наш главный актив. Каждый проект — это долгосрочные отношения, а не разовая сделка.' },
  { icon: TrendingUp, title: 'Результат, не процесс', desc: 'Мы ориентированы на измеримый результат. Каждая рекомендация подкреплена данными и приводит к конкретным действиям.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
        <div className="relative container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/70 block mb-4">ABOUT</span>
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-white mb-4">
            О компании
          </h1>
          <p className="text-lg text-white/40 max-w-2xl">
            TopAdvisor — стратегический консалтинг для компаний и инвесторов, 
            работающих на растущих рынках Узбекистана и Центральной Азии.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-4">МИССИЯ</span>
            <h2 className="font-display text-display-sm font-bold text-navy-800 mb-6">
              Мы делаем бизнес в Центральной Азии прозрачным, понятным и выгодным
            </h2>
            <p className="text-navy-500 leading-relaxed mb-4">
              Узбекистан — один из самых динамично развивающихся рынков в мире. Масштабные реформы,
              приватизация, открытие для иностранных инвестиций — всё это создаёт уникальные возможности.
            </p>
            <p className="text-navy-500 leading-relaxed">
              Но навигация в этой среде требует глубокого понимания регуляторного ландшафта, 
              культурного контекста и реальных механизмов принятия решений. Именно это мы даём нашим клиентам.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-4">ЦЕННОСТИ</span>
          <h2 className="font-display text-display-sm font-bold text-navy-800 mb-12">Наш подход</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl border border-navy-100/60 p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-gold-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-800 mb-3">{v.title}</h3>
                <p className="text-sm text-navy-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-4">ИСТОРИЯ</span>
          <h2 className="font-display text-display-sm font-bold text-navy-800 mb-12">Ключевые вехи</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] md:left-[31px] top-2 bottom-2 w-px bg-navy-100" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 md:gap-8">
                  {/* Dot */}
                  <div className="relative shrink-0">
                    <div className="w-[48px] md:w-[64px] h-[48px] md:h-[64px] rounded-full bg-stone-50 border-2 border-navy-100 flex items-center justify-center z-10 relative">
                      <span className="text-xs md:text-sm font-mono font-bold text-navy-500">{m.year}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-2 md:pt-4 pb-2">
                    <h3 className="font-display text-lg font-bold text-navy-800 mb-1">{m.title}</h3>
                    <p className="text-sm text-navy-400">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-4">ГЕОГРАФИЯ</span>
          <h2 className="font-display text-display-sm font-bold text-navy-800 mb-6">Где мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { region: 'Узбекистан', detail: 'Ташкент (HQ), Самарканд, Бухара, Навои, Фергана', flag: '🇺🇿' },
              { region: 'Центральная Азия', detail: 'Казахстан, Кыргызстан, Таджикистан, Туркменистан', flag: '🌏' },
              { region: 'Международные партнёры', detail: 'EBRD, EU, World Bank, IFC, USAID', flag: '🤝' },
            ].map((g, i) => (
              <div key={i} className="bg-white rounded-2xl border border-navy-100/60 p-6">
                <span className="text-3xl block mb-4">{g.flag}</span>
                <h3 className="font-display text-lg font-bold text-navy-800 mb-2">{g.region}</h3>
                <p className="text-sm text-navy-400">{g.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
