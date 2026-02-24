import { ArrowUpRight, Filter } from 'lucide-react';

const projects = [
  { title: 'Единая инвестиционная платформа', client: 'EBRD / Правительство Узбекистана', practice: 'Government', year: '2024-2025', desc: 'Создание цифровой платформы для координации инвестиционных проектов по всей территории Узбекистана.' },
  { title: 'SECCA — устойчивая энергетика в ЦА', client: 'Европейский Союз', practice: 'Government', year: '2023-2026', desc: 'Координация регионального проекта по развитию энергетической связности и устойчивого развития в Центральной Азии.' },
  { title: 'Market Entry Strategy', client: 'Международный гостиничный оператор', practice: 'Strategy', year: '2024', desc: 'Комплексный анализ рынка гостеприимства Узбекистана и стратегия входа с подписанием управляющего контракта.' },
  { title: 'IP-портфель в Центральной Азии', client: 'Fortune 500 Tech Company', practice: 'Legal', year: '2023-2024', desc: 'Регистрация и защита 15+ товарных знаков, разработка стратегии IP-менеджмента для региона.' },
  { title: 'Реинжиниринг бизнес-процессов', client: 'Производственный холдинг', practice: 'Transformation', year: '2023', desc: 'Оптимизация 12 ключевых бизнес-процессов, сокращение производственного цикла на 35%.' },
  { title: 'ESCO регуляторный фреймворк', client: 'Правительство Узбекистана', practice: 'Government', year: '2025', desc: 'Разработка нормативной базы для внедрения модели энергосервисных контрактов (ESCO).' },
  { title: 'Due Diligence — энергетический сектор', client: 'Европейский инвестиционный фонд', practice: 'Strategy', year: '2024', desc: 'Комплексная проверка 5 проектов в солнечной энергетике, потенциал $50M+ инвестиций.' },
  { title: 'Выход финтех-стартапа на рынок', client: 'Финтех-компания', practice: 'Legal', year: '2024', desc: 'Полное регуляторное сопровождение: лицензирование, compliance, защита данных.' },
];

const practiceColors: Record<string, string> = {
  Strategy: 'bg-blue-50 text-blue-600',
  Transformation: 'bg-orange-50 text-orange-600',
  Legal: 'bg-purple-50 text-purple-600',
  Government: 'bg-green-50 text-green-600',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
        <div className="relative container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/70 block mb-4">CASE STUDIES</span>
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-white mb-4">Проекты</h1>
          <p className="text-lg text-white/40 max-w-xl">Избранные проекты из нашей практики.</p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-navy-100/60 p-7 hover:shadow-lg hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-2xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${practiceColors[p.practice] || 'bg-gray-50 text-gray-600'}`}>
                    {p.practice}
                  </span>
                  <span className="text-xs font-mono text-navy-300">{p.year}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors">{p.title}</h3>
                <p className="text-sm text-gold-500 font-medium mb-3">{p.client}</p>
                <p className="text-sm text-navy-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
