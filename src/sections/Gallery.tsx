import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import DecorativeDivider from '../components/DecorativeDivider';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/deity1.jpg', alt: 'श्री संत गजानन महाराज मूर्ती' },
  { src: '/images/deity2.jpg', alt: 'मंदिरातील मूर्ती दर्शन' },
  { src: '/images/deity3.jpg', alt: 'गजानन महाराज मूर्ती' },
  { src: '/images/deity4.jpg', alt: 'देवी दर्शन' },
  { src: '/images/deity5.jpg', alt: 'सोन्याची मूर्ती' },
  { src: '/images/temple1.jpg', alt: 'मंदिर बाह्य दृश्य' },
  { src: '/images/temple2.jpg', alt: 'मंदिर उत्सव' },
  { src: '/images/temple3.jpg', alt: 'मंदिर प्रांगण' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    if (lightbox) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="py-20 px-4 md:px-8"
        style={{ backgroundColor: '#FFF3E0' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-center leading-tight mb-2"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              color: '#6A040F',
            }}
          >
            गॅलरी — सेवेचे क्षण
          </h2>
          <p className="text-center mb-10" style={{ fontSize: '0.9rem', color: '#8B6914' }}>
            आमच्या सेवा प्रकल्पांचे काही पवित्र क्षण
          </p>

          <div ref={gridRef} className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="gallery-item overflow-hidden rounded-2xl cursor-pointer transition-all duration-400"
                style={{
                  boxShadow: '0 4px 16px rgba(106, 4, 15, 0.12)',
                }}
                onClick={() => setLightbox(img.src)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'scale(1.03)';
                  el.style.boxShadow = '0 8px 24px rgba(106, 4, 15, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'scale(1)';
                  el.style.boxShadow = '0 4px 16px rgba(106, 4, 15, 0.12)';
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(45, 27, 0, 0.92)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            onClick={() => setLightbox(null)}
          >
            <X size={24} color="white" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-[90vw] max-h-[80vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <DecorativeDivider />
    </>
  );
}
