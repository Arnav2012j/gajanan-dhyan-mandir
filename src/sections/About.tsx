import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: '#FFFBF5' }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div ref={textRef}>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#E85D04' }}
          >
            प्रास्ताविक
          </p>
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              color: '#6A040F',
            }}
          >
            सेवा हीच साधना — सेवा हीच खरी देवपूजा
          </h2>

          <div className="space-y-4" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#2D1B00' }}>
            <p>
              श्री संत गजानन महाराज सेवा ट्रस्ट हे महाराष्ट्रातील एक निस्वार्थ धार्मिक व सामाजिक संस्था आहे. आमचा प्रमुख उद्देश गरीब, गरजू व वृद्ध लोकांना अन्न, वस्त्र, शिक्षण आणि वैद्यकीय सहाय्य पुरवणे आहे.
            </p>
            <p>
              संत गजानन महाराजांच्या आशीर्वादाने आम्ही दररोज अन्नदान सेवा, गोशाळा संचालन, वृद्धाश्रम सेवा आणि विद्यार्थी शिष्यवृत्ती अशा विविध प्रकल्पांचे संचालन करतो. प्रत्येक देणगी ही थेट या सेवा प्रकल्पांमध्ये वापरली जाते.
            </p>
            <p>
              आमचा विश्वास आहे की — 'जो देतो त्यालाच मिळते, जो तोडतो त्यालाच फुटते.' आपली देणगी ही पवित्र कृती आहे जी लाखो जीवनांमध्ये प्रकाश पसरवते.
            </p>
          </div>

          {/* Quote highlight box */}
          <div
            className="mt-6 p-5 rounded-xl"
            style={{
              border: '2px solid #FFB703',
              backgroundColor: 'rgba(255, 183, 3, 0.08)',
            }}
          >
            <p
              className="text-lg font-semibold italic"
              style={{ color: '#D00000' }}
            >
              "सेवा परमो धर्मः"
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div ref={imageRef} className="relative">
          <img
            src="/images/temple2.jpg"
            alt="अन्नदान सेवा"
            className="w-full rounded-2xl object-cover"
            style={{
              boxShadow: '0 8px 32px rgba(106, 4, 15, 0.15)',
              maxHeight: '500px',
            }}
          />
          {/* Badge */}
          <div
            className="absolute -bottom-4 -left-4 px-5 py-3 rounded-full text-white font-bold text-sm shadow-lg"
            style={{ backgroundColor: '#E85D04' }}
          >
            सेवा ही साधना
          </div>
        </div>
      </div>
    </section>
  );
}
