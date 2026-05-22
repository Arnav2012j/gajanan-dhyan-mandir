import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'प्रास्ताविक', href: '#about' },
  { label: 'देणगी योजना', href: '#donation' },
  { label: 'सेवा प्रकल्प', href: '#activities' },
  { label: 'गॅलरी', href: '#gallery' },
  { label: 'संपर्क', href: '#contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:px-8"
        style={{
          background: 'rgba(255, 251, 245, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(232, 93, 4, 0.15)',
        }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-base md:text-lg font-bold"
          style={{ color: '#D00000' }}
        >
          श्री संत गजानन महाराज सेवा ट्रस्ट
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-base font-semibold transition-colors duration-200 hover:text-[#E85D04]"
              style={{ color: '#2D1B00' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => navigate('/donate')}
            className="px-6 py-2 rounded-full text-white font-semibold text-sm transition-all duration-250 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#E85D04',
              boxShadow: '0 4px 20px rgba(232, 93, 4, 0.3)',
            }}
          >
            देणगी द्या
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} color="#2D1B00" /> : <Menu size={24} color="#2D1B00" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: '#FFF3E0' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-2xl font-semibold"
              style={{ color: '#2D1B00' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); navigate('/donate'); }}
            className="px-8 py-3 rounded-full text-white font-semibold text-lg mt-4"
            style={{ backgroundColor: '#E85D04' }}
          >
            देणगी द्या
          </button>
        </div>
      )}
    </>
  );
}
