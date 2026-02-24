import { Linkedin, Mail } from 'lucide-react';

// TODO: Replace with real team data and photos
const leadership = [
  {
    name: 'Алексей Ниязметов',
    nameEn: 'Alexey Niyazmetov',
    role: 'Управляющий партнёр',
    roleEn: 'Managing Partner',
    expertise: ['Стратегический консалтинг', 'Инвестиции', 'ГЧП', 'Международные проекты'],
    bio: 'Более 15 лет опыта в стратегическом консалтинге и юридическом сопровождении крупных международных проектов в Центральной Азии.',
    linkedin: '#',
    email: 'alexey@topadvisor.biz',
  },
  {
    name: 'Гайрат Ташматов',
    nameEn: 'Gayrat Tashmatov',
    role: 'Старший эксперт',
    roleEn: 'Senior Expert',
    expertise: ['Стратегическое планирование', 'Энергетика', 'Региональное развитие', 'EU проекты'],
    bio: 'PhD-кандидат в области региональной экономики. Координатор проектов EBRD и EU в Узбекистане. Эксперт по энергетическим рынкам.',
    linkedin: '#',
    email: 'gayrat@topadvisor.biz',
  },
];

const team = [
  { name: 'Олеся', role: 'Контент и коммуникации', practice: 'Marketing' },
  // TODO: add more team members
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
        <div className="relative container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/70 block mb-4">TEAM</span>
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-white mb-4">
            Наша команда
          </h1>
          <p className="text-lg text-white/40 max-w-xl">
            Эксперты с международным опытом в стратегии, праве и развитии бизнеса.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24">
        <div className="container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-4">ЛИДЕРСТВО</span>
          <h2 className="font-display text-display-sm font-bold text-navy-800 mb-12">Ключевые эксперты</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((person, i) => (
              <div key={i} className="bg-white rounded-2xl border border-navy-100/60 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Photo placeholder */}
                <div className="h-64 bg-gradient-to-br from-navy-100 to-stone-100 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-navy-200/50 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-navy-400">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-1">{person.name}</h3>
                  <p className="text-sm font-medium text-gold-500 mb-4">{person.role}</p>
                  <p className="text-sm text-navy-400 leading-relaxed mb-5">{person.bio}</p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {person.expertise.map((e, j) => (
                      <span key={j} className="text-2xs font-medium text-navy-500 bg-stone-100 px-3 py-1 rounded-full">
                        {e}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-navy-50">
                    <a href={person.linkedin} className="w-9 h-9 rounded-lg bg-stone-50 border border-navy-100/40 flex items-center justify-center text-navy-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                      <Linkedin size={16} />
                    </a>
                    <a href={`mailto:${person.email}`} className="w-9 h-9 rounded-lg bg-stone-50 border border-navy-100/40 flex items-center justify-center text-navy-400 hover:text-gold-500 hover:border-gold-200 transition-all">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400 block mb-4">КАРЬЕРА</span>
            <h2 className="font-display text-display-sm font-bold text-navy-800 mb-4">
              Присоединяйтесь к нам
            </h2>
            <p className="text-navy-400 leading-relaxed mb-8">
              Мы ищем экспертов с международным опытом в области стратегии, права и экономики.
              Если вы хотите работать над значимыми проектами в одном из самых динамичных регионов мира — напишите нам.
            </p>
            <a href="/contacts" className="inline-flex items-center gap-2 bg-navy-500 hover:bg-navy-600 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all">
              Написать нам
              <Mail size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
