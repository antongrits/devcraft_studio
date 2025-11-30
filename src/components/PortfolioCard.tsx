interface PortfolioCardProps {
  title: string;
  description: string;
  result: string;
  tags: string[];
  image: string;
  onClick?: () => void;
}

export function PortfolioCard({
  title,
  description,
  result,
  tags,
  image,
  onClick,
}: PortfolioCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
         onClick={onClick}>
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
          {title}
        </h3>
        
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="text-sm text-[var(--color-text-secondary)] mb-1">Результат</div>
          <div className="font-semibold text-[var(--color-success)]">{result}</div>
        </div>
        
        <button className="mt-4 text-[var(--color-primary)] font-medium group-hover:underline">
          Смотреть кейс →
        </button>
      </div>
    </div>
  );
}
