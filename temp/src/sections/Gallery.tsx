import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import DecorativeDivider from '../components/DecorativeDivider';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/deity1.jpg', alt: 'श्री संत गजानन महाराज मूर्ती', portrait: true },
  { src: '/images/deity2.jpg', alt: 'मंदिरातील मूर्ती दर्शन', portrait: false },
  { src: '/images/deity3.jpg', alt: 'गजानन महाराज मूर्ती', portrait: true },
  { src: '/images/deity4.jpg', alt: 'देवी दर्शन', portrait: true },
  { src: '/images/deity5.jpg', alt: 'सोन्याची मूर्ती', portrait: true },
  { src: '/images/temple1.jpg', alt: 'मंदिर बाह्य दृश्य', portrait: true },
  { src: '/images/temple2.jpg', alt: 'मंदिर उत्सव', portrait: true },
  { src: '/images/temple3.jpg', alt: 'मंदिर प्रांगण', portrait: false },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
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
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => (i! + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i! - 1 + galleryImages.length) % galleryImages.length);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', handleKey);
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
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#6A040F' }}
          >
            गॅलरी — सेवेचे क्षण
          </h2>
          <p className="text-center mb-10" style={{ fontSize: '0.9rem', color: '#8B6914' }}>
            आमच्या सेवा प्रकल्पांचे काही पवित्र क्षण
          </p>

          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLightbox(idx)}
                className="group block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                style={{
                  boxShadow: '0 4px 16px rgba(106,4,15,0.12)',
                  transition: 'box-shadow 0.25s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    '0 8px 24px rgba(106,4,15,0.22)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    '0 4px 16px rgba(106,4,15,0.12)';
                }}
              >
                <div
                  className="w-full overflow-hidden"
                  style={{ aspectRatio: '3 / 4' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: img.portrait ? 'center top' : 'center center',
                      display: 'block',
                      transform: 'scale(1)',
                      transition: 'transform 0.35s ease',
                    }}
                    className="group-hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(45,27,0,0.94)', backdropFilter: 'blur(10px)' }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            onClick={() => setLightbox(null)}
            aria-label="बंद करा"
          >
            <X size={22} color="white" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i! - 1 + galleryImages.length) % galleryImages.length); }}
            aria-label="मागील"
          >
            <ChevronLeft size={24} color="white" />
          </button>

          {/* Image */}
          <div
            className="flex items-center justify-center px-16"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '85vh' }}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
                width: 'auto',
                height: 'auto',
                borderRadius: '12px',
                objectFit: 'contain',
                display: 'block',
                transform: 'none',
                rotate: '0deg',
              }}
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i! + 1) % galleryImages.length); }}
            aria-label="पुढील"
          >
            <ChevronRight size={24} color="white" />
          </button>

          {/* Counter */}
          <p
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm"
            style={{ color: 'rgba(255,248,231,0.7)' }}
          >
            {lightbox + 1} / {galleryImages.length}
          </p>
        </div>
      )}

      <DecorativeDivider />
    </>
  );
}
