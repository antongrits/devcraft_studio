import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'about', label: 'О нас' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl text-[var(--color-text-primary)]">
              DevCraft Studio
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`transition-colors hover:text-[var(--color-primary)] ${
                  currentPage === item.id
                    ? 'text-[var(--color-primary)] font-medium'
                    : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button + Language Toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavigate('contacts')}
              className="px-6 py-3 rounded-lg gradient-primary text-white font-medium hover:opacity-90 transition-opacity"
            >
              Заказать проект
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 transition-colors">
              RU
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-text-primary)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-[var(--color-primary)] font-medium'
                    : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contacts')}
              className="w-full px-6 py-3 rounded-lg gradient-primary text-white font-medium hover:opacity-90 transition-opacity"
            >
              Заказать проект
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
