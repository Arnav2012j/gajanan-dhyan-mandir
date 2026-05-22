import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const donationImages = [
  { src: '/images/donation-01.png', alt: 'अन्नदान व गौसेवा ₹११०१' },
  { src: '/images/donation-02.png', alt: 'माऊली अभिषेक ₹११००' },
  { src: '/images/donation-03.png', alt: 'वृद्धाश्रम / विधवाश्रम / अनाथाश्रम ₹११००' },
  { src: '/images/donation-04.png', alt: 'धर्मार्थ दवाखाना / रुग्णवाहिका ₹११००' },
  { src: '/images/donation-05.png', alt: 'वारकरी प्रशिक्षण केंद्र / अभ्यासिका निधी ₹११००' },
];

export default function DonationPlans() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const totalRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 50, scale: 0.92 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      gsap.fromTo(
        totalRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: totalRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="donation"
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
      style={{
        background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE4C4 50%, #FFDAB9 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#6A040F' }}
          >
            आजिवन देणगी योजना
          </h2>
          <p className="mt-2" style={{ fontSize: '0.92rem', color: '#8B6914' }}>
            ॥ श्री संत गजानन महाराज ध्यान मंदिर, कोंढाळी ॥
          </p>
          <p className="mt-1" style={{ fontSize: '0.85rem', color: '#A07830' }}>
            आपल्या श्रद्धेनुसार देणगी निवडा. प्रत्येक देणगी ही गरीब व जरुरीमंदांसाठी वापरली जाते.
          </p>
        </div>

        {/* Image grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {donationImages.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: '0 6px 24px rgba(106,4,15,0.13)',
                border: '2px solid rgba(244,162,97,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(106,4,15,0.22)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E85D04';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 24px rgba(106,4,15,0.13)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(244,162,97,0.3)';
              }}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />

              {/* Donate button */}
              <button
                onClick={() => navigate('/donate')}
                className="w-full py-3 font-bold text-white text-sm transition-all duration-200 group-hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #D00000, #6A040F)',
                  letterSpacing: '0.03em',
                }}
              >
                देणगी द्या 🙏
              </button>
            </div>
          ))}
        </div>

        {/* Total row */}
        <div
          ref={totalRef}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #FFF8E7, #FFE4C4)',
            border: '2px solid #E85D04',
            boxShadow: '0 4px 18px rgba(232,93,4,0.12)',
          }}
        >
          <div>
            <p style={{ fontSize: '0.85rem', color: '#8B6914', fontFamily: "'Yatra One', cursive", letterSpacing: '0.04em', marginBottom: '2px' }}>
              एकूण आजिवन देणगी
            </p>
            <p style={{ fontSize: '2.2rem', color: '#D00000', fontFamily: "'Yatra One', cursive", lineHeight: 1.1 }}>
              ₹ ५५०१
            </p>
          </div>

          <p className="text-center text-sm max-w-xs" style={{ color: '#8B6914', lineHeight: 1.7 }}>
            देणगी ऑनलाइन / बँक ट्रान्सफर / चेक / रोख स्वीकारली जाते.
          </p>

          <button
            onClick={() => navigate('/donate')}
            className="px-8 py-3 rounded-full text-white font-semibold transition-all duration-250 hover:-translate-y-0.5 whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #D00000, #6A040F)',
              boxShadow: '0 4px 20px rgba(208,0,0,0.3)',
            }}
          >
            आजिवन देणगी द्या 🙏
          </button>
        </div>
      </div>
    </section>
  );
}
