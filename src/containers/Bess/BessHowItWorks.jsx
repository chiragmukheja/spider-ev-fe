import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../../utils/animationConfig";

import powerOutageVid from "../../assets/bess/During Power Outages.mp4";
import powerRestoreVid from "../../assets/bess/Power Restoration.mp4";
import solarIntegVid from "../../assets/bess/Solar Integration.mp4";

const tabs = [
  {
    id: "outages",
    label: "During Power Outages",
    shortLabel: "Power Outages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    video: powerOutageVid,
    heading: "Seamless Backup During Power Cuts",
    description:
      "When the grid goes down, SpiderVault switches to battery power in under 10ms — so fast your appliances never notice. Air conditioners, lights, and critical devices stay on without interruption.",
    stat1: { value: "10ms", label: "Transfer Time" },
    stat2: { value: "8–12h", label: "Typical Backup" },
  },
  {
    id: "restoration",
    label: "Power Restoration",
    shortLabel: "Restoration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
    video: powerRestoreVid,
    heading: "Smart Recharge After Power Returns",
    description:
      "Once grid power is restored, SpiderVault intelligently recharges itself while continuing to power your load. It manages charging cycles to maximise battery life and keep efficiency at its peak.",
    stat1: { value: "AC+DC", label: "Dual Charging" },
    stat2: { value: "95%+", label: "Round-trip Eff." },
  },
  {
    id: "solar",
    label: "Solar Integration",
    shortLabel: "Solar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    video: solarIntegVid,
    heading: "Store Solar Energy, Use It Anytime",
    description:
      "SpiderVault's built-in MPPT charge controller captures excess solar energy during the day and stores it for use at night or on cloudy days — slashing your electricity bills and carbon footprint.",
    stat1: { value: "MPPT", label: "Solar Charger" },
    stat2: { value: "0 Bill", label: "Off-grid Capable" },
  },
];

const BessHowItWorks = () => {
  const [activeId, setActiveId] = useState("outages");
  const videoRef = useRef(null);

  const activeTab = tabs.find((t) => t.id === activeId);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeId]);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ background: "linear-gradient(180deg, #F3F5F8 0%, #eef0f4 100%)" }}
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="relative max-w-330 mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-secondary font-semibold text-xs uppercase tracking-widest"
          >
            See It In Action
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900"
          >
            How SpiderVault Works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base"
          >
            From power cuts to solar charging — watch SpiderVault handle every scenario intelligently.
          </motion.p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden shadow-xl"
          style={{
            background: "linear-gradient(160deg, #04080f 0%, #060c1c 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Tab bar */}
          <div
            className="flex border-b"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className="flex-1 relative flex items-center justify-center gap-2 py-4 px-3 sm:px-5 text-xs sm:text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "rgb(76,175,69)" : "rgba(255,255,255,0.38)",
                    background: isActive
                      ? "rgba(76,175,69,0.07)"
                      : "transparent",
                  }}
                >
                  <span
                    style={{ color: isActive ? "rgb(76,175,69)" : "rgba(255,255,255,0.3)" }}
                  >
                    {tab.icon}
                  </span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "rgb(76,175,69)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-0">

            {/* Video panel */}
            <div
              className="relative overflow-hidden"
              style={{ background: "#000", minHeight: "260px" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <video
                    ref={videoRef}
                    key={activeTab.video}
                    src={activeTab.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ maxHeight: "480px", minHeight: "260px" }}
                  />
                  {/* Subtle right-side gradient blend */}
                  <div
                    className="absolute inset-y-0 right-0 w-24 pointer-events-none hidden lg:block"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(6,12,28,0.85))",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId + "-info"}
                className="flex flex-col justify-center p-7 sm:p-10 lg:p-10"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                {/* Icon badge */}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(76,175,69,0.14)",
                    border: "1px solid rgba(76,175,69,0.28)",
                    color: "rgb(76,175,69)",
                  }}
                >
                  {activeTab.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                  {activeTab.heading}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-7">
                  {activeTab.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[activeTab.stat1, activeTab.stat2].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl px-4 py-3"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="text-lg font-extrabold tabular-nums"
                        style={{ color: "rgb(76,175,69)" }}
                      >
                        {s.value}
                      </div>
                      <div className="text-white/35 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200"
                  style={{ color: "rgb(76,175,69)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(100,210,93)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(76,175,69)")}
                >
                  Get a Free Consultation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BessHowItWorks;
