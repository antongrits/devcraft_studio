import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  text: string;
  rating: number;
  avatar: string;
}

export function TestimonialCard({
  name,
  position,
  text,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[var(--color-text-primary)]">{name}</h4>
          <p className="text-sm text-[var(--color-text-secondary)]">{position}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
        "{text}"
      </p>
    </div>
  );
}
