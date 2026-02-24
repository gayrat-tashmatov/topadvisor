'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { useState } from 'react';

const practices = [
  'Strategy & Advisory',
  'Business Transformation', 
  'Legal & Regulatory',
  'Government & Public Sector',
  'Other',
];

export default function ContactsPage() {
  const t = useTranslations('nav');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
        <div className="relative container-wide section-padding">
          <span className="text-xs font-mono font-bold tracking-[0.35em] text-gold-400/70 block mb-4">CONTACT</span>
          <h1 className="font-display text-display-md md:text-display-lg font-bold text-white mb-4">
            Обсудим ваш проект
          </h1>
          <p className="text-lg text-white/40 max-w-xl">
            Свяжитесь с нами для консультации по стратегии, юридическим вопросам или международным проектам.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-navy-800 mb-8">Форма обратной связи</h2>
              
              {submitted ? (
                <div className="text-center py-16 bg-green-50 rounded-2xl border border-green-100">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-display text-xl font-bold text-navy-800 mb-2">Спасибо!</h3>
                  <p className="text-navy-400">Мы свяжемся с вами в течение 24 часов.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy-600 mb-2">Имя *</label>
                      <input
                        type="text" required
                        className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-stone-50 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/10 transition-all"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-600 mb-2">Компания</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-stone-50 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/10 transition-all"
                        placeholder="Название компании"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy-600 mb-2">Email *</label>
                      <input
                        type="email" required
                        className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-stone-50 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/10 transition-all"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-600 mb-2">Телефон</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-stone-50 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/10 transition-all"
                        placeholder="+998 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-2">Направление</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-stone-50 text-navy-800 focus:outline-none focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/10 transition-all">
                      <option value="">Выберите направление</option>
                      {practices.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-2">Сообщение *</label>
                    <textarea
                      required rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-stone-50 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/10 transition-all resize-none"
                      placeholder="Расскажите о вашем проекте или вопросе..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-navy-500 hover:bg-navy-600 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    Отправить
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact cards */}
              {[
                { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: 'Телефон', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { icon: MapPin, label: 'Адрес', value: 'Ташкент, Узбекистан', href: null },
                { icon: Send, label: 'Telegram', value: siteConfig.telegram, href: `https://t.me/${siteConfig.telegram.replace('@', '')}` },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-stone-50 border border-navy-50">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-400 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-navy-700 hover:text-gold-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-navy-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="p-5 rounded-xl bg-navy-800 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-gold-400" />
                  <span className="text-sm font-semibold">Часы работы</span>
                </div>
                <p className="text-sm text-white/50">Пн — Пт: 9:00 — 18:00</p>
                <p className="text-sm text-white/50">Сб — Вс: по договорённости</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
