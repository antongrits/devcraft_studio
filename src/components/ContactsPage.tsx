import { ChevronRight, MapPin, Phone, Mail, Clock, Send, Calendar, MessageCircle, ChevronDown, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useState } from 'react';

interface ContactsPageProps {
  onNavigate: (page: string) => void;
}

export function ContactsPage({ onNavigate }: ContactsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Сколько стоит разработка сайта?',
      answer: 'Стоимость зависит от сложности проекта. Простой корпоративный сайт — от 2500 BYN, интернет-магазин — от 4500 BYN. Точную цену рассчитываем после брифинга.',
    },
    {
      question: 'Какие сроки разработки?',
      answer: 'Средний срок для корпоративного сайта — 3-4 недели, для интернет-магазина — 5-8 недель, для сложного веб-приложения — от 8 недель. Точные сроки обсуждаем индивидуально.',
    },
    {
      question: 'Можно ли оплатить частями?',
      answer: 'Да, работаем по схеме: 50% предоплата при подписании договора, 50% после сдачи проекта. Для крупных проектов возможна поэтапная оплата.',
    },
    {
      question: 'Предоставляете ли гарантию?',
      answer: 'Да, на все проекты предоставляем гарантию 12 месяцев. В течение этого периода исправляем все ошибки бесплатно.',
    },
    {
      question: 'Работаете ли с клиентами из других городов?',
      answer: 'Да, работаем с клиентами по всей Беларуси и СНГ. Встречи проводим онлайн, если личная встреча невозможна.',
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
            <span className="text-[var(--color-text-primary)]">Контакты</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] mb-4">
            Контакты
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)]">
            Свяжитесь с нами удобным способом
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                  Офис
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-[var(--color-text-primary)] font-medium">
                        220004, г. Минск, ул. Немига, 40, офис 506
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                        5 минут пешком от ст. метро «Немига»
                      </p>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200">
                    <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                      <div className="text-center p-8">
                        <MapPin className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-3" />
                        <p className="text-[var(--color-text-secondary)]">
                          г. Минск, ул. Немига, 40
                        </p>
                        <p className="text-sm text-[var(--color-text-tertiary)] mt-2">
                          Интерактивная карта OpenStreetMap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                  Телефоны
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <a
                        href="tel:+375293456789"
                        className="text-[var(--color-text-primary)] font-medium hover:text-[var(--color-primary)] transition-colors"
                      >
                        +375 (29) 345-67-89
                      </a>
                      <p className="text-sm text-[var(--color-text-secondary)]">Velcom/A1</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <a
                        href="tel:+375338765432"
                        className="text-[var(--color-text-primary)] font-medium hover:text-[var(--color-primary)] transition-colors"
                      >
                        +375 (33) 876-54-32
                      </a>
                      <p className="text-sm text-[var(--color-text-secondary)]">МТС</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                    Звоните Пн-Пт 9:00-19:00, Сб 10:00-15:00
                  </p>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                  Email
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <a
                        href="mailto:hello@devcraft.by"
                        className="text-[var(--color-text-primary)] font-medium hover:text-[var(--color-primary)] transition-colors"
                      >
                        hello@devcraft.by
                      </a>
                      <p className="text-sm text-[var(--color-text-secondary)]">Общие вопросы</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <a
                        href="mailto:business@devcraft.by"
                        className="text-[var(--color-text-primary)] font-medium hover:text-[var(--color-primary)] transition-colors"
                      >
                        business@devcraft.by
                      </a>
                      <p className="text-sm text-[var(--color-text-secondary)]">Коммерческие предложения</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                  Время работы
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[var(--color-text-primary)] font-medium">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-[var(--color-text-primary)] font-medium">Суббота: 10:00 - 15:00</p>
                    <p className="text-[var(--color-text-secondary)]">Воскресенье: Выходной</p>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
                  Социальные сети
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://t.me/devcraft_by"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Send className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/devcraft.minsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/devcraftstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/company/devcraft-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-xl sticky top-32">
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                  Напишите нам
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Ответим в течение 2 часов в рабочее время
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Ваше имя*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                      placeholder="Иван Петров"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Телефон*
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                      placeholder="+375 (XX) XXX-XX-XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                      placeholder="Название компании (необязательно)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Тема обращения*
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent">
                      <option>Разработка сайта</option>
                      <option>Мобильное приложение</option>
                      <option>CRM/ERP система</option>
                      <option>Поддержка проекта</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Сообщение*
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
                      id="consent-contact"
                      className="mt-1 w-4 h-4 text-[var(--color-primary)] border-gray-300 rounded focus:ring-[var(--color-primary)]"
                    />
                    <label htmlFor="consent-contact" className="text-sm text-[var(--color-text-secondary)]">
                      Согласен на обработку персональных данных*
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Отправить заявку
                  </button>

                  <p className="text-xs text-[var(--color-text-secondary)] text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Быстрый ответ в Telegram
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Напишите нам в мессенджер для оперативной связи
              </p>
              <a
                href="https://t.me/devcraft_by"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                Написать в Telegram
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Записаться на встречу
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Забронируйте удобное время для консультации в офисе или онлайн
              </p>
              <button className="px-6 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                Выбрать время
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Задать вопрос в чате
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Онлайн-консультант ответит на ваши вопросы прямо сейчас
              </p>
              <button className="px-6 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                Начать чат
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] mb-16">
            Часто задаваемые вопросы
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[var(--color-text-primary)] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[var(--color-primary)] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-[var(--color-text-secondary)] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}