const PLAY_URL  = "https://play.google.com/store/apps/details?id=com.spiderenergy";
const APPLE_URL = "https://apps.apple.com/in/app/spider-energy/id6752536630";

// Shared app-store badge style used on every page.
// Both badges are identical in shape, size, and colour so the pair looks uniform.
const AppStoreButtons = ({ className = "" }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {/* Google Play */}
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-xl border border-white/10 hover:bg-gray-800 transition-colors"
    >
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.33.18.72.18 1.06.01l11.37-6.57-2.46-2.46-9.97 9.02zM.5 1.4C.19 1.76 0 2.27 0 2.93v18.14c0 .66.19 1.17.5 1.53l.08.08 10.16-10.16v-.24L.58 1.32.5 1.4zM19.43 10.23l-2.82-1.63-2.76 2.76 2.76 2.76 2.84-1.64c.81-.47.81-1.23-.02-1.25zM4.24.24L15.61 6.8l-2.46 2.46L3.18.24C3.52.06 3.91.06 4.24.24z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] text-white/50 font-medium">Get it on</div>
        <div className="text-sm font-bold">Google Play</div>
      </div>
    </a>

    {/* App Store */}
    <a
      href={APPLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-xl border border-white/10 hover:bg-gray-800 transition-colors"
    >
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.22 1.3-2.2 3.88.03 3.06 2.69 4.08 2.72 4.1l-.07.24zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] text-white/50 font-medium">Download on the</div>
        <div className="text-sm font-bold">App Store</div>
      </div>
    </a>
  </div>
);

export default AppStoreButtons;
