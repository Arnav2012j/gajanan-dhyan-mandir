import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'मी गेली 5 वर्षे या ट्रस्टला देणगी देतो. अन्नदान सेवा पाहून मन भरून येते. ही सेवा खऱ्या अर्थाने देवपूजा आहे.',
    name: 'रमेश पाटील',
    location: 'पुणे',
  },
  {
    quote: 'गोशाळेत गायींची देखभाल अप्रतिम आहे. माझ्या देणगीचा थेट वापर दिसतो. ही संस्था पूर्णपणे पारदर्शक आहे.',
    name: 'सरस्वती ताई ठाकरे',
    location: 'नागपूर',
  },
  {
    quote: 'माझ्या मुलाला या ट्रस्टमुळे शिष्यवृत्ती मिळाली. आता तो इंजिनियरिंग करतोय. कायम सेवा करत रहा.',
    name: 'कैलास भोसले',
    location: 'औरंगाबाद',
  },
  {
    quote: 'वृद्धाश्रमातील सेवा पाहून मी माझ्या आई-वडिलांच्या नावाने देणगी दिली. अतिशय समाधान वाटते.',
    name: 'प्रिया कुलकर्णी',
    location: 'मुंबई',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
      style={{
        backgroundColor: '#FFFBF5',
        background: 'radial-gradient(ellipse at center, rgba(255, 183, 3, 0.08) 0%, transparent 70%), #FFFBF5',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-bold text-center leading-tight mb-10"
          style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            color: '#6A040F',
          }}
        >
          भक्त अनुभव — श्रद्धेचे शब्द
        </h2>

        <div ref={cardsRef} className="testimonial-scroll pb-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[340px] p-7 rounded-2xl"
              style={{
                backgroundColor: '#FFFBF5',
                border: '2px solid rgba(244, 162, 97, 0.25)',
                boxShadow: '0 4px 12px rgba(232, 93, 4, 0.08)',
              }}
            >
              <Quote size={24} style={{ color: '#FFB703', marginBottom: '12px' }} />
              <p
                className="italic mb-4"
                style={{
                  fontSize: '1.05rem',
                  color: '#2D1B00',
                  lineHeight: 1.8,
                }}
              >
                "{t.quote}"
              </p>
              <div
                className="pt-4"
                style={{ borderTop: '1px solid rgba(244, 162, 97, 0.3)' }}
              >
                <p className="font-semibold" style={{ color: '#D00000' }}>
                  {t.name}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#8B6914' }}>
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
