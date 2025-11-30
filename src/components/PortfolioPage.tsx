import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { PortfolioCard } from './PortfolioCard';
import { TestimonialCard } from './TestimonialCard';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Все проекты' },
    { id: 'websites', label: 'Веб-сайты' },
    { id: 'ecommerce', label: 'Интернет-магазины' },
    { id: 'apps', label: 'Приложения' },
    { id: 'systems', label: 'Системы автоматизации' },
  ];

  const projects = [
    {
      title: 'TechStore - интернет-магазин электроники',
      description: 'Современный интернет-магазин с 5000+ товаров, интеграцией платёжных систем и доставкой',
      result: 'Рост конверсии на 45% за первые 3 месяца',
      tags: ['E-commerce', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYxOTExOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ecommerce',
    },
    {
      title: 'MedClinic - сайт медицинского центра',
      description: 'Информационный сайт с онлайн-записью к врачам и личным кабинетом пациента',
      result: '200+ онлайн-записей в месяц',
      tags: ['Корп. сайт', 'CMS', 'SEO'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjQ1MTg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'websites',
    },
    {
      title: 'FitTracker - мобильное приложение',
      description: 'Приложение для отслеживания тренировок и питания с 10000+ установок',
      result: '4.8 звёзд в App Store',
      tags: ['iOS/Android', 'Flutter', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NjE4OTk3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'apps',
    },
    {
      title: 'LogisticPro - CRM для логистики',
      description: 'Система управления заказами и маршрутами для транспортной компании',
      result: 'Сокращение времени обработки заказов на 60%',
      tags: ['CRM', 'Python', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1634804658555-248d9e9a212f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzYxOTI0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'systems',
    },
    {
      title: 'BeautyBook - платформа для салонов красоты',
      description: 'Агрегатор салонов красоты с онлайн-бронированием услуг',
      result: '50+ подключенных салонов',
      tags: ['Веб-портал', 'Vue.js', 'API'],
      image: 'https://images.unsplash.com/photo-1703222420506-992b9436a319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzY0NTE4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'websites',
    },
    {
      title: 'RestaurantHub - сайт сети ресторанов',
      description: 'Мультиязычный сайт с меню, онлайн-резервацией столиков',
      result: '300+ бронирований в месяц',
      tags: ['Корп. сайт', 'Адаптивность'],
      image: 'https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjQ0MzM5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'websites',
    },
    {
      title: 'EduPlatform - образовательная платформа',
      description: 'Платформа онлайн-курсов с видеоуроками и тестами',
      result: '1500+ студентов обучено',
      tags: ['Веб-приложение', 'Django', 'React'],
      image: 'https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2NDUxODYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'websites',
    },
    {
      title: 'WarehouseSystem - система складского учёта',
      description: 'Автоматизация складских операций для производственной компании',
      result: 'Ошибки учёта снижены на 85%',
      tags: ['ERP', '.NET', 'SQL Server'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzeXN0ZW18ZW58MXx8fHwxNzY0NTE4NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'systems',
    },
    {
      title: 'EventsMinsk - афиша мероприятий',
      description: 'Городская афиша с продажей билетов и QR-кодами',
      result: '50000+ проданных билетов',
      tags: ['Веб-портал', 'API интеграция'],
      image: 'https://images.unsplash.com/photo-1632127262892-47b58fb84735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHRpY2tldHMlMjBhcHB8ZW58MXx8fHwxNzY0NTE4NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'websites',
    },
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      position: 'Директор TechStore',
      text: 'DevCraft Studio разработали для нас интернет-магазин за месяц. Профессиональная команда, всё сделали качественно и в срок. Рекомендуем!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE4NjAzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Марина Соколова',
      position: 'Управляющая MedClinic',
      text: 'Отличное сотрудничество! Ребята создали удобный сайт с онлайн-записью. Теперь пациенты могут записываться сами, и нагрузка на администраторов снизилась.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTgyOTAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Дмитрий Волков',
      position: 'CEO LogisticPro',
      text: 'Разработали нам CRM-систему под ключ. Автоматизировали все процессы логистики. Очень довольны результатом и продолжаем сотрудничество.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1080&q=80',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-bg-secondary)] to-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[var(--color-primary)]">
              Главная
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[var(--color-text-primary)]">Портфолио</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] mb-4">
            Портфолио проектов
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)]">
            120+ реализованных проектов за 5 лет
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${activeFilter === filter.id
                    ? 'gradient-primary text-white'
                    : 'bg-gray-100 text-[var(--color-text-secondary)] hover:bg-gray-200'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Отзывы клиентов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Хотите попасть в наше портфолио?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Оставьте заявку и мы обсудим ваш проект!
          </p>
          <button
            onClick={() => onNavigate('contacts')}
            className="px-8 py-4 rounded-lg bg-white text-[var(--color-primary)] font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            Обсудить проект
          </button>
        </div>
      </section>
    </div>
  );
}