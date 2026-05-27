import { useNavigate } from 'react-router';
import { ArrowLeft, Smartphone, Building2, QrCode } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.parikrama.app&hl=en_IN';

export default function Donate() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, #FFF8E7 0%, #FFE4C4 60%, #F4A261 100%)',
      }}
    >
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 mb-8 font-semibold transition-all duration-200 hover:-translate-x-1"
        style={{ color: '#E85D04' }}
      >
        <ArrowLeft size={20} />
        मुख्य पृष्ठावर परत जा
      </button>

      <div className="text-center mb-10">
        <p className="text-3xl font-bold mb-1" style={{ color: '#D00000' }}>ॐ</p>
        <h1
          className="font-extrabold leading-tight mb-3"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#2D1B00' }}
        >
          देणगी पृष्ठ
        </h1>
        <p className="max-w-xl mx-auto leading-relaxed" style={{ color: '#8B6914', fontSize: '1.05rem' }}>
          आपली देणगी गरीब व जरुरीमंद बांधवांच्या जीवनात प्रकाश आणते.
          अन्नदान, वस्त्रदान व शिक्षणासाठी आपले सहकार्य अमूल्य आहे.
        </p>
        <div className="flex flex-col items-center gap-1 mt-4">
          <div style={{ width: '120px', height: '2px', backgroundColor: '#E85D04' }} />
          <div style={{ width: '80px', height: '1px', backgroundColor: '#F4A261' }} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* My Parikrama App */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1.5px solid rgba(232,93,4,0.2)',
            boxShadow: '0 4px 24px rgba(232,93,4,0.08)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Smartphone size={22} style={{ color: '#E85D04' }} />
            <h2 className="text-xl font-bold" style={{ color: '#2D1B00' }}>My Parikrama App द्वारे देणगी</h2>
          </div>
          <p className="mb-5 text-sm" style={{ color: '#8B6914' }}>
            आमच्या <strong>My Parikrama</strong> ॲपवरून सहज व सुरक्षित देणगी द्या.
            खालील लिंकवर क्लिक करा किंवा Play Store वर "My Parikrama" शोधा.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #D00000, #6A040F)',
              boxShadow: '0 4px 20px rgba(208,0,0,0.3)',
            }}
          >
            <Smartphone size={18} />
            My Parikrama App वर देणगी द्या 🙏
          </a>
        </div>

        {/* PhonePe QR Code */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1.5px solid rgba(232,93,4,0.2)',
            boxShadow: '0 4px 24px rgba(232,93,4,0.08)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <QrCode size={22} style={{ color: '#5F259F' }} />
            <h2 className="text-xl font-bold" style={{ color: '#2D1B00' }}>PhonePe QR कोड स्कॅन करा</h2>
          </div>
          <p className="mb-5 text-sm" style={{ color: '#8B6914' }}>
            कोणत्याही UPI ॲपने (PhonePe, GPay, Paytm) खालील QR कोड स्कॅन करून देणगी द्या.
          </p>
          <div className="flex justify-center">
            <img
              src="/images/phonepe-qr.png"
              alt="PhonePe QR Code — SHRI SANT GAJANAN MAHARAJ DHAYANMANDIR KONDHALI"
              className="rounded-2xl"
              style={{
                maxWidth: 260,
                width: '100%',
                border: '3px solid #5F259F',
                boxShadow: '0 8px 28px rgba(95,37,159,0.18)',
              }}
            />
          </div>
          <p className="mt-3 text-xs font-semibold" style={{ color: '#5F259F' }}>
            SHRI SANT GAJANAN MAHARAJ DHAYANMANDIR KONDHALI
          </p>
        </div>

        {/* Bank Details */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1.5px solid rgba(232,93,4,0.2)',
            boxShadow: '0 4px 24px rgba(232,93,4,0.08)',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={22} style={{ color: '#E85D04' }} />
            <h2 className="text-xl font-bold" style={{ color: '#2D1B00' }}>बँक तपशील</h2>
          </div>
          <div className="flex flex-col gap-0">
            {[
              { label: 'खाते नाव', value: 'SHRI SANT GAJANAN MAHARAJ DHAYANMANDIR KONDHALI' },
              { label: 'बँकेचे नाव', value: 'अरविंद सहकारी बँक लि.' },
              { label: 'खाते क्रमांक', value: '100310011002263' },
              { label: 'IFSC कोड', value: 'ARBL0000003' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-start py-3 border-b last:border-b-0"
                style={{ borderColor: 'rgba(232,93,4,0.12)' }}
              >
                <span className="font-semibold text-sm" style={{ color: '#8B6914' }}>{item.label}</span>
                <span className="font-bold text-sm text-right ml-4 select-all" style={{ color: '#2D1B00' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp contact */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1.5px solid rgba(37,211,102,0.25)',
            boxShadow: '0 4px 24px rgba(37,211,102,0.08)',
          }}
        >
          <p className="mb-3 text-sm font-medium" style={{ color: '#8B6914' }}>
            देणगीबाबत अधिक माहितीसाठी WhatsApp वर संपर्क करा
          </p>
          <a
            href="https://wa.me/919923586208?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%BE%E0%A4%B0%2C%20%E0%A4%A6%E0%A5%87%E0%A4%A3%E0%A4%97%E0%A5%80%20%E0%A4%AC%E0%A4%A6%E0%A5%8D%E0%A4%A6%E0%A4%B2%20%E0%A4%AE%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A4%B5%E0%A5%80%20%E0%A4%86%E0%A4%B9%E0%A5%87."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.52.674 4.882 1.848 6.918L2 30l7.294-1.822A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.34 19.4c-.35-.17-2.06-1.01-2.38-1.13-.32-.11-.55-.17-.78.17-.23.35-.89 1.13-1.09 1.36-.2.23-.4.26-.74.09-.35-.17-1.47-.54-2.8-1.73a10.5 10.5 0 0 1-1.94-2.41c-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.06-.84 2.35-1.65.29-.81.29-1.51.2-1.65-.08-.14-.31-.23-.66-.4z"/>
            </svg>
            WhatsApp: +91 9923586208
          </a>
        </div>

        <div className="text-center py-4">
          <p className="font-semibold italic" style={{ color: '#D00000', fontSize: '1.05rem' }}>
            "जो देतो त्यालाच मिळते — सेवा हीच साधना"
          </p>
          <p className="text-sm mt-1" style={{ color: '#8B6914' }}>
            आपल्या उदार देणगीबद्दल मनःपूर्वक आभार 🙏
          </p>
        </div>

      </div>
    </div>
  );
}
