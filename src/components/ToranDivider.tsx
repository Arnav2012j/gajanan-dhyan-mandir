export default function ToranDivider() {
  return (
    <div className="flex items-center justify-center py-8 overflow-hidden">
      <svg width="400" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
        {/* Left garland */}
        <path d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20" stroke="#F4A261" strokeWidth="1.5" fill="none" />
        {/* Right garland */}
        <path d="M200 20 Q225 35 250 20 Q275 5 300 20 Q325 35 350 20 Q375 5 400 20" stroke="#F4A261" strokeWidth="1.5" fill="none" />
        {/* Hanging elements */}
        <circle cx="50" cy="20" r="4" fill="#FFB703" opacity="0.6" />
        <circle cx="100" cy="20" r="4" fill="#FFB703" opacity="0.6" />
        <circle cx="150" cy="20" r="4" fill="#FFB703" opacity="0.6" />
        <circle cx="250" cy="20" r="4" fill="#FFB703" opacity="0.6" />
        <circle cx="300" cy="20" r="4" fill="#FFB703" opacity="0.6" />
        <circle cx="350" cy="20" r="4" fill="#FFB703" opacity="0.6" />
        {/* Center flower */}
        <circle cx="200" cy="20" r="8" fill="#FFB703" opacity="0.8" />
        <circle cx="200" cy="20" r="4" fill="#E85D04" opacity="0.6" />
      </svg>
    </div>
  );
}
