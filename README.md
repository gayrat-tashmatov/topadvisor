# TopAdvisor — Стратегический консалтинг для растущих рынков

Сайт компании TopAdvisor. Next.js 14, TypeScript, Tailwind CSS, мультиязычность (RU/EN/UZ).

## 🚀 Быстрый старт

### 1. Установить зависимости
```bash
npm install
```

### 2. Запустить в режиме разработки
```bash
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000)

### 3. Собрать для продакшна
```bash
npm run build
npm run start
```

## 📁 Структура проекта

```
src/
├── app/
│   └── [locale]/          # Страницы (RU/EN/UZ)
│       ├── layout.tsx      # Общий layout
│       ├── page.tsx        # Главная
│       ├── practices/      # Практики
│       ├── projects/       # Проекты (case studies)
│       ├── insights/       # Аналитика и дайджесты
│       ├── team/           # Команда
│       ├── about/          # О компании
│       └── contacts/       # Контакты
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Секции главной страницы
│   └── ui/                # UI-компоненты (Button, Card...)
├── i18n/
│   ├── messages/          # Переводы (ru.json, en.json, uz.json)
│   ├── routing.ts         # Настройка маршрутизации
│   └── request.ts         # Серверный конфиг
├── lib/
│   ├── constants.ts       # Данные сайта, навигация
│   └── utils.ts           # Утилиты
└── globals.css            # Глобальные стили
```

## 🎨 Дизайн-система

- **Шрифты:** Cormorant Garamond (заголовки) + Plus Jakarta Sans (текст)
- **Цвета:** Navy (#1B2A4A) + Gold (#D4A843) + Off-white
- **Стиль:** Премиальный минимализм (McKinsey / BCG уровень)

## 🌐 Мультиязычность

Переводы в `src/i18n/messages/`. Добавить текст:
1. Открыть `ru.json` / `en.json` / `uz.json`
2. Добавить ключ-значение
3. Использовать `const t = useTranslations('section')` в компоненте

## 📝 Добавить контент

### Статьи (Insights)
Создать файл в `content/insights/my-article.md`:
```markdown
---
title: "Заголовок статьи"
date: "2026-03-01"
type: "digest"
tags: ["налоги", "IT"]
---

Текст статьи...
```

### Проекты (Case Studies)
Создать файл в `content/projects/project-name.md`:
```markdown
---
title: "Название проекта"
client: "Название клиента"
practice: "strategy"
year: 2025
---

## Задача
...
## Подход
...
## Результат
...
```

## 🚀 Деплой на Vercel

1. Push код на GitHub
2. Войти на [vercel.com](https://vercel.com) через GitHub
3. Import → выбрать репозиторий → Deploy
4. Привязать домен topadvisor.biz в Settings → Domains

## 📞 Контакты

TopAdvisor Consulting — [topadvisor.biz](https://topadvisor.biz)
