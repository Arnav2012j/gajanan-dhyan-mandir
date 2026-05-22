import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
      style={{
        background: 'linear-gradient(180deg, #FFFBF5 0%, #FFF3E0 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-bold text-center leading-tight mb-12"
          style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            color: '#6A040F',
          }}
        >
          संपर्क साधा — सेवेत सहभागी व्हा
        </h2>

        {/* Contact cards */}
        <div ref={leftRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {/* Address */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: '#FFFBF5',
              border: '1px solid rgba(244, 162, 97, 0.3)',
              boxShadow: '0 4px 12px rgba(232, 93, 4, 0.08)',
            }}
          >
            <div className="flex items-start gap-4">
              <MapPin size={28} style={{ color: '#E85D04', flexShrink: 0 }} />
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#2D1B00' }}>
                  पत्ता
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#2D1B00', lineHeight: 1.8 }}>
                  श्री संत गजानन महाराज ध्यान मंदिर, कोंढाळी
                </p>
                <p style={{ fontSize: '0.95rem', color: '#8B6914', lineHeight: 1.7 }}>
                  तारोडा - कोंढाळी रोड, सोनेगाव (बु.), कोंढाळी,<br />
                  महाराष्ट्र — ४४११०३
                </p>
                <a
                  href="https://maps.google.com/?q=Shri+Sant+Gajanan+Maharaj+Dhyan+Mandir+Kondhali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-semibold hover:underline"
                  style={{ color: '#E85D04' }}
                >
                  <MapPin size={14} /> Google Maps वर पहा
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: '#FFFBF5',
              border: '1px solid rgba(244, 162, 97, 0.3)',
              boxShadow: '0 4px 12px rgba(232, 93, 4, 0.08)',
            }}
          >
            <div className="flex items-start gap-4">
              <Mail size={28} style={{ color: '#E85D04', flexShrink: 0 }} />
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#2D1B00' }}>
                  ईमेल
                </h3>
                <a
                  href="mailto:gajananmaharajkondhali@gmail.com"
                  style={{ fontSize: '1.05rem', color: '#E85D04' }}
                  className="hover:underline"
                >
                  gajananmaharajkondhali@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: '#FFFBF5',
              border: '1px solid rgba(244, 162, 97, 0.3)',
              boxShadow: '0 4px 12px rgba(232, 93, 4, 0.08)',
            }}
          >
            <div className="flex items-start gap-4">
              <Phone size={28} style={{ color: '#E85D04', flexShrink: 0 }} />
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#2D1B00' }}>
                  संपर्क क्रमांक
                </h3>
                <a
                  href="tel:+919923586208"
                  style={{ fontSize: '1.15rem', color: '#E85D04', fontWeight: 700 }}
                  className="hover:underline"
                >
                  +91 9923586208
                </a>
                <p className="mt-1 text-xs" style={{ color: '#8B6914' }}>
                  WhatsApp वरही उपलब्ध
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Cards */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/gajanan_maharaj_kondhali2023/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 block rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)',
              padding: '3px',
              boxShadow: '0 8px 32px rgba(238,42,123,0.25)',
            }}
          >
            <div className="rounded-2xl p-5 flex items-center gap-4 h-full" style={{ backgroundColor: '#FFFBF5' }}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)' }}
              >
                <Instagram size={28} color="white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold leading-tight text-sm" style={{ color: '#2D1B00' }}>
                  @gajanan_maharaj_kondhali2023
                </p>
                <p className="text-xs mt-1" style={{ color: '#8B6914' }}>Instagram वर फॉलो करा</p>
                <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ background: 'linear-gradient(135deg, #ee2a7b, #6228d7)' }}>
                  <Instagram size={12} /> Follow करा
                </div>
              </div>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1LJ2if3ci6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 block rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #1877F2, #0a5dc2)',
              padding: '3px',
              boxShadow: '0 8px 32px rgba(24,119,242,0.25)',
            }}
          >
            <div className="rounded-2xl p-5 flex items-center gap-4 h-full" style={{ backgroundColor: '#FFFBF5' }}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #1877F2, #0a5dc2)' }}
              >
                <Facebook size={28} color="white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold leading-tight text-sm" style={{ color: '#2D1B00' }}>
                  श्री संत गजानन महाराज मंदिर
                </p>
                <p className="text-xs mt-1" style={{ color: '#8B6914' }}>Facebook वर फॉलो करा</p>
                <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: '#1877F2' }}>
                  <Facebook size={12} /> Follow करा
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
