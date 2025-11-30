import { LucideIcon } from 'lucide-react';


interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  image?: string;
  onButtonClick?: () => void;
  buttonText?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  image,
  onButtonClick,
  buttonText = 'Подробнее',
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-8">
        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
          {title}
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-semibold text-[var(--color-primary)]">
            {price}
          </span>
          {onButtonClick && (
            <button
              onClick={onButtonClick}
              className="px-6 py-2.5 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface DetailedServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  duration: string;
  price: string;
  onButtonClick?: () => void;
}

export function DetailedServiceCard({
  icon: Icon,
  title,
  description,
  features,
  duration,
  price,
  onButtonClick,
}: DetailedServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
        {title}
      </h3>

      <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">
          Что входит:
        </h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-success)] mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div>
          <div className="text-sm text-[var(--color-text-secondary)] mb-1">Срок</div>
          <div className="font-semibold text-[var(--color-text-primary)]">{duration}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-[var(--color-text-secondary)] mb-1">Стоимость</div>
          <div className="text-2xl font-semibold text-[var(--color-primary)]">{price}</div>
        </div>
      </div>

      {onButtonClick && (
        <button
          onClick={onButtonClick}
          className="w-full mt-6 px-6 py-3 rounded-lg gradient-primary text-white font-medium hover:opacity-90 transition-opacity"
        >
          Заказать
        </button>
      )}
    </div>
  );
}
