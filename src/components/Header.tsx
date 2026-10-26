import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import practiceConfig from '../config/practice';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Appointments & Fees', href: '/appointments' },
  { name: 'New Patients', href: '/new-patients' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-sage/40">
      {/* Skip to content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Doctor Name */}
          <Link
            to="/"
            className="flex items-center gap-2 text-forest font-semibold text-lg lg:text-xl hover:opacity-80 transition-opacity"
          >
            <span className="hidden sm:inline">{practiceConfig.doctor.name}</span>
            <span className="sm:hidden text-base">Dr Mitchell</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-forest bg-sage/30'
                    : 'text-charcoal-light hover:text-forest hover:bg-sage/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {practiceConfig.practice.phone !== '[Phone — To Be Confirmed]' && (
              <a
                href={`tel:${practiceConfig.practice.phone}`}
                className="flex items-center gap-1.5 text-sm text-charcoal-light hover:text-forest transition-colors"
                aria-label={`Call the practice on ${practiceConfig.practice.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" />
                <span>{practiceConfig.practice.phoneDisplay}</span>
              </a>
            )}
            <a
              href={practiceConfig.booking.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-forest text-white text-sm font-semibold rounded-lg hover:bg-forest-dark transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={practiceConfig.booking.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-forest text-white text-sm font-semibold rounded-lg"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-forest rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sage/40 bg-ivory">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-forest bg-sage/30'
                    : 'text-charcoal-light hover:text-forest hover:bg-sage/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {practiceConfig.practice.phone !== '[Phone — To Be Confirmed]' && (
              <a
                href={`tel:${practiceConfig.practice.phone}`}
                className="flex items-center gap-2 px-4 py-3 text-base text-charcoal-light hover:text-forest rounded-lg"
              >
                <Phone className="w-4 h-4" />
                {practiceConfig.practice.phoneDisplay}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
