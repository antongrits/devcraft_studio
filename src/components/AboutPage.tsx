import { ChevronRight, CheckCircle, Lightbulb, Eye } from 'lucide-react';
import { TeamCard } from './TeamCard';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { number: '2019', label: 'Год основания' },
    { number: '120+', label: 'Завершённых проектов' },
    { number: '12', label: 'Специалистов в команде' },
    { number: '98%', label: 'Довольных клиентов' },
  ];

  const team = [
    {
      name: 'Андрей Ковалёв',
      position: 'CEO & Co-founder',
      description: '10 лет в IT, управляет командой и стратегией развития',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MzA2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      socials: { linkedin: '#', github: '#' },
    },
    {
      name: 'Максим Иванов',
      position: 'Tech Lead',
      description: 'Архитектор решений, эксперт в React и Node.js',
      avatar: 'https://images.unsplash.com/photo-1618593706014-06782cd3bb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwbWFsZXxlbnwxfHx8fDE3NjQ1MTg2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      socials: { linkedin: '#', github: '#' },
    },
    {
      name: 'Елена Волкова',
      position: 'Lead UI/UX Designer',
      description: 'Создаёт интерфейсы, которые любят пользователи',
      avatar: 'https://images.unsplash.com/photo-1613493719343-98bc97e16d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NTE4NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      socials: { linkedin: '#' },
    },
    {
      name: 'Сергей Петров',
      position: 'Senior Backend Developer',
      description: 'Специалист по Python и Django, строит надёжные API',
      avatar: 'https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBtYWxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NTE4NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      socials: { linkedin: '#', github: '#' },
    },
    {
      name: 'Анна Смирнова',
      position: 'Frontend Developer',
      description: 'Превращает макеты в идеальную вёрстку',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzYxOTI0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      socials: { linkedin: '#' },
    },
    {
      name: 'Павел Морозов',
      position: 'Mobile Developer',
      description: 'Разрабатывает нативные приложения для iOS/Android',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1080&q=80',
      socials: { linkedin: '#', github: '#' },
    },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Качество',
      description: 'Мы не сдаём проекты, пока не уверены, что они работают идеально. Каждая строка кода проходит код-ревью и тестирование.',
    },
    {
      icon: Eye,
      title: 'Прозрачность',
      description: 'Вы всегда знаете, на каком этапе находится ваш проект. Еженедельные отчёты и доступ к таск-трекеру.',
    },
    {
      icon: Lightbulb,
      title: 'Инновации',
      description: 'Используем современный стек технологий и следим за трендами, чтобы ваш продукт был актуальным.',
    },
  ];

  const techStack = {
    Frontend: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    Backend: ['Node.js', 'Python', 'Django', 'PostgreSQL'],
    Mobile: ['Flutter', 'React Native', 'Swift'],
    DevOps: ['Docker', 'AWS', 'CI/CD'],
    Инструменты: ['Figma', 'Jira', 'Git', 'Postman'],
  };

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
            <span className="text-[var(--color-text-primary)]">О нас</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] mb-4">
            О компании DevCraft Studio
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)]">
            Мы создаём digital-продукты с 2019 года
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                <strong className="text-[var(--color-text-primary)]">DevCraft Studio</strong> — это команда профессиональных веб-разработчиков из Минска. Мы специализируемся на создании веб-сайтов, мобильных приложений и корпоративных систем для бизнеса любого масштаба.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Наша миссия — помогать компаниям расти за счёт современных цифровых технологий. Мы не просто пишем код — мы создаём решения, которые приносят реальную пользу бизнесу наших клиентов.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                За 5 лет работы мы реализовали более 120 проектов для компаний из разных сфер: от небольших стартапов до крупных предприятий. География наших клиентов — Беларусь, Россия, страны Европы.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODc0MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="DevCraft Studio Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-3">
                  {stat.number}
                </div>
                <div className="text-[var(--color-text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Наша команда
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Наши ценности
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Технологический стек
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Сертификаты и партнёрства
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Google Partner', 'Microsoft Partner', 'AWS Partner', 'ISO 9001'].map((partner, index) => (
              <div
                key={index}
                className="w-48 h-32 bg-white rounded-xl flex items-center justify-center font-bold text-gray-400 hover:text-[var(--color-text-primary)] hover:shadow-lg transition-all"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Присоединяйтесь к нашим довольным клиентам
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Начните свой проект уже сегодня!
          </p>
          <button
            onClick={() => onNavigate('contacts')}
            className="px-8 py-4 rounded-lg bg-white text-[var(--color-primary)] font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            Начать проект
          </button>
        </div>
      </section>
    </div>
  );
}