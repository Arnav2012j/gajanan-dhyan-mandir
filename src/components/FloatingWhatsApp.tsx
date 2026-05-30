export default function FloatingWhatsApp() {
  const phone = '918999054469';
  const message = encodeURIComponent('नमस्कार, श्री संत गजानन महाराज ध्यान मंदिर कोंढाळी बद्दल माहिती हवी आहे.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp वर संपर्क करा"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      style={{
        width: 60,
        height: 60,
        backgroundColor: '#25D366',
        boxShadow: '0 8px 28px rgba(37,211,102,0.45)',
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.52.674 4.882 1.848 6.918L2 30l7.294-1.822A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.88-1.6l-.42-.25-4.33 1.08 1.1-4.22-.27-.43A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.34-8.6c-.35-.17-2.06-1.01-2.38-1.13-.32-.11-.55-.17-.78.17-.23.35-.89 1.13-1.09 1.36-.2.23-.4.26-.74.09-.35-.17-1.47-.54-2.8-1.73a10.5 10.5 0 0 1-1.94-2.41c-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.06-.84 2.35-1.65.29-.81.29-1.51.2-1.65-.08-.14-.31-.23-.66-.4z" />
      </svg>
    </a>
  );
}
