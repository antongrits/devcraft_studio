import { Github, Linkedin } from 'lucide-react';

interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  avatar: string;
  socials?: {
    github?: string;
    linkedin?: string;
  };
}

export function TeamCard({
  name,
  position,
  description,
  avatar,
  socials,
}: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
          {name}
        </h3>
        <p className="text-[var(--color-primary)] font-medium mb-3">{position}</p>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {socials && (
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
