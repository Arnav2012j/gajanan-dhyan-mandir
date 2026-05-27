import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UtensilsCrossed, Leaf, GraduationCap, HeartHandshake, ArrowRight } from 'lucide-react';
import ToranDivider from '../components/ToranDivider';

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    icon: UtensilsCrossed,
    title: 'अन्नदान सेवा',
    description: 'दररोज 500+ गरजू लोकांना निःशुल्क भोजन. सकाळी व संध्याकाळी नियमित अन्नदान.',
  },
  {
    icon: Leaf,
    title: 'गोशाळा संचालन',
    description: '50+ गायींची देखभाल — चारा, गवत व वैद्यकीय सेवा. गोसेवा म्हणजे धर्मसेवा.',
  },
  {
    icon: GraduationCap,
    title: 'विद्यार्थी शिष्यवृत्ती',
    description: 'गरीब व होशियार विद्यार्थ्यांना शिक्षण शुल्क, पुस्तके व साहित्य पुरवठा.',
  },
  {
    icon: HeartHandshake,
    title: 'वृद्धाश्रम सेवा',
    description: 'वृद्धांना वस्त्र, अन्न, वैद्यकीय तपासणी व भावनिक सहकार्य.',
  },
];

export default function Activities() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
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
      id="activities"
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: '#FFFBF5' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-bold text-center leading-tight mb-12"
          style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            color: '#6A040F',
          }}
        >
          सेवा प्रकल्प — आमच्या समाजसेवेची क्षेत्रे
        </h2>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFBF5',
                  border: '1px solid rgba(244, 162, 97, 0.3)',
                  boxShadow: '0 4px 12px rgba(232, 93, 4, 0.08)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(255, 183, 3, 0.15)' }}
                >
                  <Icon size={32} style={{ color: '#E85D04' }} />
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#2D1B00' }}>
                  {activity.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#8B6914', lineHeight: 1.7 }}>
                  {activity.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 mt-4 font-semibold transition-colors duration-200 hover:opacity-80"
                  style={{ color: '#E85D04', fontSize: '0.9rem' }}
                >
                  अधिक माहिती <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <ToranDivider />
    </section>
  );
}
