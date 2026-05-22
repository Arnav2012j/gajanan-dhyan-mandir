import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Flame, Users, CircleDot, ShieldCheck, BookHeart, Heart, UserCheck, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Sparkles,
    text: 'दानाने पापनाश होतो — \'दानं सर्वविनाशनम्\' असे शास्त्र सांगते. दान हे सर्व पापांचे निवारण आहे.',
  },
  {
    icon: Flame,
    text: 'अग्नीने दान दिलेले धान्य शुद्ध करतो. अन्नदान हे सर्व दानांमध्ये उत्तम मानले जाते.',
  },
  {
    icon: Users,
    text: 'गरीबांना अन्न देणे म्हणजे देवाला अन्न दिल्यासारखे. \'अन्नदानं महादानं\' — अन्नदान हे महादान आहे.',
  },
  {
    icon: CircleDot,
    text: 'सेवेने मन शुद्ध होते, समाज सुधारतो व परिवारात सुख-समृद्धी नांदते.',
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.85, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (itemsRef.current) {
        gsap.fromTo(
          itemsRef.current.children,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.15,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
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
        background: 'linear-gradient(135deg, #6A040F 0%, #9D0208 50%, #D00000 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Circular Image */}
        <div className="flex justify-center">
          <div
            ref={imageRef}
            className="relative"
            style={{
              width: 'clamp(260px, 30vw, 360px)',
              height: 'clamp(260px, 30vw, 360px)',
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden circular-frame"
              style={{
                border: '5px solid #FFB703',
                boxShadow: '0 0 60px rgba(255, 183, 3, 0.3)',
              }}
            >
              <img
                src="/images/deity3.jpg"
                alt="आरती सेवा"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB703' }} />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB703' }} />
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB703' }} />
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB703' }} />
          </div>
        </div>

        {/* Right - Benefits text */}
        <div ref={itemsRef}>
          <h2
            className="font-bold leading-tight mb-8"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              color: '#FFF8E7',
            }}
          >
            दानाचे महत्त्व — धर्म, अर्थ आणि मोक्ष
          </h2>

          <div className="space-y-0">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="py-5"
                  style={{
                    borderBottom: idx < benefits.length - 1 ? '1px solid rgba(255, 184, 3, 0.2)' : 'none',
                  }}
                >
                  <div className="flex gap-4 items-start">
                    <Icon size={24} style={{ color: '#FFB703', flexShrink: 0, marginTop: '4px' }} />
                    <p style={{ fontSize: '1.05rem', color: '#FFF8E7', lineHeight: 1.8 }}>
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* आपल्या देणगीची वैशिष्ट्ये */}
      <div className="max-w-6xl mx-auto mt-14">
        <h3
          className="font-bold text-center mb-8"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#FFB703' }}
        >
          आपल्या देणगीची वैशिष्ट्ये
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: ShieldCheck, title: 'संपूर्ण पारदर्शकता', desc: 'सर्व देणग्यांचा हिशोब ठेवला जातो व अहवाल प्रकाशित केला जातो.' },
            { icon: BookHeart, title: 'गुरूचरणी समर्पित', desc: 'सर्व सेवा श्री संत गजानन महाराजांच्या नावाने केली जाते.' },
            { icon: Heart, title: 'सेवेचे थेट फायदे', desc: 'गरीब, वृद्ध, विद्यार्थी यांना प्रत्यक्ष मदत मिळते.' },
            { icon: UserCheck, title: 'परिवाराचे नाव', desc: 'देणगीदाराचे नाव सेवेत कायमस्वरूपी नोंदवले जाते.' },
            { icon: Smartphone, title: 'Online / Offline दोन्ही', desc: 'ऑनलाइन व ऑफलाइन देणगी स्वीकारली जाते.' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl flex gap-4 items-start"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,183,3,0.2)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,183,3,0.15)' }}
                >
                  <Icon size={20} style={{ color: '#FFB703' }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: '#FFB703', fontSize: '1rem' }}>{item.title}</p>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,248,231,0.8)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div
          className="mt-10 p-6 rounded-2xl text-center"
          style={{
            backgroundColor: 'rgba(255,183,3,0.1)',
            border: '2px solid rgba(255,183,3,0.3)',
          }}
        >
          <p
            className="font-bold italic"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#FFB703', lineHeight: 1.8 }}
          >
            "अन्नदान हे श्रेष्ठ दान, येणाऱ्यांना मिळते करण्या पुण्य !!"
          </p>
        </div>
      </div>
    </section>
  );
}
