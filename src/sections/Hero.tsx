import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { HandHeart } from 'lucide-react';

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 8 + Math.random() * 12,
    left: Math.random() * 100,
    top: 30 + Math.random() * 60,
    opacity: 0.15 + Math.random() * 0.2,
    duration: 6 + Math.random() * 4,
    delay: -(Math.random() * 8),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: '#FFB703',
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function TempleSilhouette() {
  return (
    <svg
      className="temple-silhouette"
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M400 20 L420 60 L450 50 L470 90 L500 80 L520 120 L550 110 L570 150 L600 140 L620 180 L800 180 L800 200 L0 200 L0 180 L180 180 L200 140 L230 150 L250 110 L280 120 L300 80 L330 90 L350 50 L380 60 Z"
        fill="#E85D04"
      />
      <circle cx="400" cy="35" r="15" fill="#E85D04" />
      <rect x="395" y="50" width="10" height="5" fill="#E85D04" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        frameRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2 },
        0.3
      )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.7
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          0.9
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const navigate = useNavigate();
  const handleDonationClick = () => {
    navigate('/donate');
  };

  const handleSevaClick = () => {
    const el = document.querySelector('#activities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden pt-16"
      style={{
        background:
          'radial-gradient(ellipse at center, #FFF8E7 0%, #FFE4C4 40%, #F4A261 80%, #E85D04 120%)',
      }}
    >
      <FloatingParticles />
      <TempleSilhouette />

      {/* OM Icon */}
      <div className="relative z-10 mb-4" style={{ color: '#FFB703' }}>
        <HandHeart size={48} strokeWidth={1.5} />
      </div>

      {/* Circular Deity Frame */}
      <div
        ref={frameRef}
        className="relative z-10 mb-4 circular-frame"
        style={{
          width: 'clamp(200px, 35vw, 280px)',
          height: 'clamp(200px, 35vw, 280px)',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/hero-deity.jpg"
          alt="श्री संत गजानन महाराज"
          className="w-full h-full object-cover"
        />
      </div>

      {/* YouTube Video - below logo */}
      <div className="relative z-10 w-full max-w-2xl mb-4 rounded-2xl overflow-hidden shadow-2xl"
        style={{ aspectRatio: '16/9', border: '3px solid rgba(255,183,3,0.4)' }}>
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=UUF0vmJ8J-yJis8jMP5NeRfA&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="श्री संत गजानन महाराज"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>

      <p className="relative z-10 text-xl font-semibold mb-2" style={{ color: '#D00000' }}>
        ॐ
      </p>

      {/* Main Headline */}
      <h1
        className="relative z-10 font-extrabold leading-tight max-w-4xl text-center"
        style={{
          fontSize: 'clamp(1.6rem, 5vw, 3.2rem)',
          color: '#2D1B00',
        }}
      >
        श्रीसंत गजानन महाराज ध्यान मंदिर, कोंढाळी
      </h1>

      {/* Registration number */}
      <div className="relative z-10 mt-1 flex flex-col items-center">
        <span
          style={{
            fontSize: '0.72rem',
            color: '#8B6914',
            letterSpacing: '0.08em',
            fontFamily: "'Mukta', sans-serif",
            fontWeight: 600,
            textTransform: 'uppercase',
            opacity: 0.8,
          }}
        >
          नोंदणी क्रमांक
        </span>
        <p
          style={{
            fontSize: '1rem',
            color: '#8B6914',
            letterSpacing: '0.05em',
            fontFamily: "'Tiro Devanagari Marathi', serif",
            lineHeight: 1.4,
          }}
        >
          र. नं. E - 0004410 (NGP)
        </p>
      </div>

      {/* Subheading */}
      <p
        ref={subheadRef}
        className="relative z-10 mt-4 max-w-2xl leading-relaxed"
        style={{
          fontSize: '1.05rem',
          color: '#8B6914',
          lineHeight: 1.8,
        }}
      >
        श्री संत गजानन महाराज सेवा ट्रस्ट, महाराष्ट्र — गरीब व जरुरीमंदांसाठी निस्वार्थ सेवा
      </p>

      {/* CTA Buttons */}
      <div ref={ctaRef} className="relative z-10 flex flex-wrap gap-4 mt-8 justify-center">
        <button
          onClick={handleDonationClick}
          className="px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all duration-250 hover:-translate-y-0.5"
          style={{
            backgroundColor: '#E85D04',
            boxShadow: '0 4px 20px rgba(232, 93, 4, 0.3)',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#F48C06';
            (e.target as HTMLElement).style.boxShadow = '0 6px 28px rgba(232, 93, 4, 0.4)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#E85D04';
            (e.target as HTMLElement).style.boxShadow = '0 4px 20px rgba(232, 93, 4, 0.3)';
          }}
        >
          देणगी द्या
        </button>
        <button
          onClick={handleSevaClick}
          className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-250 hover:-translate-y-0.5"
          style={{
            backgroundColor: 'transparent',
            border: '2px solid #D00000',
            color: '#D00000',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'rgba(208, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          सेवा जाणून घ्या
        </button>
      </div>

      {/* Decorative double line */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-1">
        <div style={{ width: '120px', height: '2px', backgroundColor: '#F4A261' }} />
        <div style={{ width: '80px', height: '1px', backgroundColor: '#F4A261' }} />
      </div>
    </section>
  );
}
