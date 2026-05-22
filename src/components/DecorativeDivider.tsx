export default function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center py-6" style={{ animation: 'divider-pulse 3s ease-in-out infinite' }}>
      <svg width="200" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12H80" stroke="#F4A261" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M120 12H190" stroke="#F4A261" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="85" cy="12" r="3" fill="#FFB703" />
        <circle cx="100" cy="12" r="5" fill="#FFB703" />
        <circle cx="115" cy="12" r="3" fill="#FFB703" />
        <path d="M70 12 Q80 6 90 12" stroke="#F4A261" strokeWidth="1" fill="none" />
        <path d="M110 12 Q120 18 130 12" stroke="#F4A261" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
