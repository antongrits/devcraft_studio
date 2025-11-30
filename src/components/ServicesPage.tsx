import { Building2, ShoppingCart, Code2, Smartphone, BarChart3, Wrench, ChevronRight } from 'lucide-react';
import { DetailedServiceCard } from './ServiceCard';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Building2,
      title: 'Корпоративные сайты',
      description: 'Представительские сайты, каталоги, промо-страницы с современным дизайном и адаптивной версткой',
      features: [
        'До 15 уникальных страниц',
        'Адаптивный дизайн',
        'Система управления контентом (CMS)',
        'SEO-оптимизация',
        'Интеграция с соц. сетями',
        'Форма обратной связи',
      ],
      duration: '3-4 недели',
      price: 'от 2 500 BYN',
    },
    {
      icon: ShoppingCart,
      title: 'Интернет-магазины',
      description: 'Полнофункциональные e-commerce решения с удобной админ-панелью и интеграцией оплаты',
      features: [
        'Каталог товаров',
        'Корзина и оформление заказа',
        'Интеграция с ЕРИП/BELPAY',
        'Личный кабинет клиента',
        'Система скидок и промокодов',
        'Аналитика продаж',
      ],
      duration: '5-8 недель',
      price: 'от 4 500 BYN',
    },
    {
      icon: Code2,
      title: 'Веб-приложения',
      description: 'Сложные веб-приложения и SaaS-продукты с богатым функционалом',
      features: [
        'Кастомная разработка',
        'API и интеграции',
        'Аутентификация пользователей',
        'Роли и права доступа',
        'Real-time обновления',
        'Масштабируемая архитектура',
      ],
      duration: '8-16 недель',
      price: 'от 7 000 BYN',
    },
    {
      icon: Smartphone,
      title: 'Мобильные приложения',
      description: 'Нативные и кроссплатформенные приложения для iOS и Android',
      features: [
        'Разработка для iOS/Android',
        'Дизайн интерфейса',
        'Backend и API',
        'Push-уведомления',
        'Аналитика пользователей',
        'Публикация в сторах',
      ],
      duration: '6-12 недель',
      price: 'от 5 000 BYN',
    },
    {
      icon: BarChart3,
      title: 'CRM и ERP системы',
      description: 'Системы управления бизнесом и автоматизации процессов компании',
      features: [
        'Учёт клиентов и сделок',
        'Управление складом',
        'Финансовая отчётность',
        'Интеграция с 1С',
        'Мобильное приложение',
        'Обучение сотрудников',
      ],
      duration: '10-20 недель',
      price: 'от 8 000 BYN',
    },
    {
      icon: Wrench,
      title: 'Поддержка и доработка',
      description: 'Техническая поддержка, доработка и развитие существующих проектов',
      features: [
        'Исправление ошибок',
        'Добавление функционала',
        'Обновление дизайна',
        'Оптимизация скорости',
        'Резервное копирование',
        'Консультации',
      ],
      duration: 'от 1 недели',
      price: 'от 800 BYN/мес',
    },
  ];

  const workProcess = [
    {
      step: '1',
      title: 'Заявка и брифинг',
      duration: '1 день',
      points: [
        'Вы оставляете заявку',
        'Мы созваниваемся и уточняем детали',
        'Подписываем NDA при необходимости',
      ],
    },
    {
      step: '2',
      title: 'Анализ и расчёт',
      duration: '2-3 дня',
      points: [
        'Анализируем требования',
        'Составляем техническое задание',
        'Рассчитываем стоимость и сроки',
      ],
    },
    {
      step: '3',
      title: 'Договор и предоплата',
      duration: '1 день',
      points: [
        'Согласовываем условия',
        'Подписываем договор',
        'Вносите предоплату 50%',
      ],
    },
    {
      step: '4',
      title: 'Разработка',
      duration: '3-12 недель',
      points: [
        'Создаём дизайн-макеты',
        'Программируем функционал',
        'Показываем промежуточные результаты',
      ],
    },
    {
      step: '5',
      title: 'Тестирование',
      duration: '1 неделя',
      points: [
        'Проверяем на ошибки',
        'Тестируем на разных устройствах',
        'Вносим правки',
      ],
    },
    {
      step: '6',
      title: 'Запуск и поддержка',
      duration: 'постоянно',
      points: [
        'Выгружаем на хостинг',
        'Настраиваем домен',
        'Предоставляем 12 мес. гарантии',
      ],
    },
  ];

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
            <span className="text-[var(--color-text-primary)]">Услуги</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] mb-4">
            Услуги веб-разработки
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl">
            Создаём продукты, которые работают на ваш бизнес
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <DetailedServiceCard
                key={index}
                {...service}
                onButtonClick={() => onNavigate('contacts')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Как мы работаем
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 relative hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {process.step}
                </div>
                
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2 mt-4">
                  {process.title}
                </h3>
                
                <div className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  {process.duration}
                </div>
                
                <ul className="space-y-2">
                  {process.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                      <span className="text-[var(--color-success)] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-primary)] mb-8">
              Закажите разработку
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Выберите услугу
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent">
                  <option>Корпоративный сайт</option>
                  <option>Интернет-магазин</option>
                  <option>Веб-приложение</option>
                  <option>��обильное приложение</option>
                  <option>CRM/ERP система</option>
                  <option>Поддержка проекта</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="Иван Петров"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="+375 (XX) XXX-XX-XX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Комментарий
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 text-[var(--color-primary)] border-gray-300 rounded focus:ring-[var(--color-primary)]"
                />
                <label htmlFor="consent" className="text-sm text-[var(--color-text-secondary)]">
                  Согласен на обработку персональных данных
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg gradient-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}