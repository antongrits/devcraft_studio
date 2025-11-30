import { Rocket, Star, Clock, Shield, Globe, Smartphone, BarChart3, ArrowRight } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

import { TestimonialCard } from './TestimonialCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const advantages = [
    {
      icon: Rocket,
      number: '120+',
      title: 'Реализованных проектов',
      subtitle: 'За 5 лет работы',
    },
    {
      icon: Star,
      number: '98%',
      title: 'Довольных клиентов',
      subtitle: 'Возвращаются к нам снова',
    },
    {
      icon: Clock,
      number: '30 дней',
      title: 'Средний срок разработки',
      subtitle: 'От макета до релиза',
    },
    {
      icon: Shield,
      number: '12 мес',
      title: 'Гарантия на все проекты',
      subtitle: 'Бесплатная поддержка',
    },
  ];

  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Vue.js', color: '#4FC08D' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Django', color: '#092E20' },
    { name: 'Flutter', color: '#02569B' },
    { name: 'Swift', color: '#FA7343' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'AWS', color: '#FF9900' },
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1745358229167-eb19e72c3f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwdGVjaG5vbG9neSUyMGNvZGV8ZW58MXx8fHwxNzYxOTI0MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-text-primary)] mb-6 leading-tight max-w-[95%] sm:max-w-full">
              Разрабатываем веб-решения для роста вашего бизнеса
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8 leading-relaxed max-w-[95%] sm:max-w-full">
              Создаём современные сайты, приложения и системы под ключ. От идеи до запуска за 4 недели
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contacts')}
                className="px-8 py-4 rounded-lg gradient-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Обсудить проект
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                Смотреть кейсы
              </button>
            </div>
          </div>

          {/* Floating Tech Icons */}
          <div className="hidden lg:block absolute top-1/4 right-20 space-y-4 opacity-60">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center font-bold text-[#61DAFB]">
              React
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center font-bold text-[#339933]">
              Node
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center font-bold text-[#3776AB]">
              Python
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Почему выбирают нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[var(--color-primary)] mb-3">
                    {advantage.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {advantage.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Полный спектр разработки под ключ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              icon={Globe}
              title="Веб-разработка"
              description="Корпоративные сайты, интернет-магазины, порталы"
              price="от 2 500 BYN"
              image="https://images.unsplash.com/photo-1759661142441-d77ffb3ca943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzYxOTE0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              onButtonClick={() => onNavigate('services')}
            />
            <ServiceCard
              icon={Smartphone}
              title="Мобильные приложения"
              description="iOS и Android приложения для бизнеса"
              price="от 5 000 BYN"
              image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NjE4OTk3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              onButtonClick={() => onNavigate('services')}
            />
            <ServiceCard
              icon={BarChart3}
              title="Системы автоматизации"
              description="CRM, ERP, внутренние системы компаний"
              price="от 8 000 BYN"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzYxOTI0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              onButtonClick={() => onNavigate('services')}
            />
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Все услуги <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Технологии, с которыми работаем
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center font-bold text-xl text-gray-400 hover:text-[var(--color-text-primary)] hover:shadow-lg transition-all cursor-pointer"
                style={{ '--tech-color': tech.color } as any}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
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

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl opacity-90">
              Оставьте заявку и получите бесплатную консультацию и расчёт стоимости
            </p>
          </div>

          <form className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Ваше имя"
                className="px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="text"
                placeholder="Телефон или Email"
                className="px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 rounded-lg bg-white text-[var(--color-primary)] font-semibold text-lg hover:bg-white/90 transition-colors"
            >
              Отправить заявку
            </button>
            <p className="mt-4 text-sm text-white/70 text-center md:text-left">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}