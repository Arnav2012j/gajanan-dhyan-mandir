import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Youtube, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: 'देणगी योजना', href: '#donation' },
  { label: 'सेवा प्रकल्प', href: '#activities' },
  { label: 'गॅलरी', href: '#gallery' },
  { label: 'संपर्क', href: '#contact' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="py-12 px-4 md:px-8"
      style={{ backgroundColor: '#6A040F' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Trust info */}
          <div>
            <p className="text-lg font-bold mb-2" style={{ color: '#FFF8E7' }}>
              श्री संत गजानन महाराज सेवा ट्रस्ट
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 248, 231, 0.6)' }}>
              सेवा हीच साधना
            </p>
          </div>

          {/* Column 2 - Quick links */}
          <div>
            <p className="font-semibold mb-3" style={{ color: '#FFB703', fontSize: '0.95rem' }}>
              दुवे
            </p>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block transition-colors duration-200 hover:text-[#FFB703]"
                  style={{ color: '#FFF8E7', fontSize: '0.95rem' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <p className="font-semibold mb-3" style={{ color: '#FFB703', fontSize: '0.95rem' }}>
              कायदेशीर
            </p>
            <div className="space-y-2">
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 248, 231, 0.7)' }}>
                12A परवाना
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 248, 231, 0.7)' }}>
                पारदर्शकता अहवाल
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/gajanan_maharaj_kondhali2023/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)', color: 'white' }}
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            href="https://www.youtube.com/channel/UCF0vmJ8J-yJis8jMP5NeRfA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: '#FF0000', color: 'white' }}
          >
            <Youtube size={18} />
            YouTube
          </a>
          <a
            href="https://www.facebook.com/share/1LJ2if3ci6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: '#1877F2', color: 'white' }}
          >
            <Facebook size={18} />
            Facebook
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{ backgroundColor: 'rgba(255, 183, 3, 0.2)' }} />

        {/* Bottom */}
        <p className="text-center mb-2" style={{ fontSize: '0.9rem', color: 'rgba(255, 248, 231, 0.5)' }}>
          &copy; २०२५ श्री संत गजानन महाराज सेवा ट्रस्ट. सर्व हक्क राखीव.
        </p>
        <p
          className="text-center italic"
          style={{ fontSize: '0.85rem', color: 'rgba(255, 183, 3, 0.6)' }}
        >
          संकल्पनेतून साकार — श्री गजानन महाराजांच्या कृपेने
        </p>
      </div>
    </footer>
  );
}
