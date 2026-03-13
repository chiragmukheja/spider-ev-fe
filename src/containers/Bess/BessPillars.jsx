import { motion } from "framer-motion";
import { fadeUp, fadeLeft, scaleUp, staggerContainer, staggerFast, viewport } from "../../utils/animationConfig";

const pillars = [
  {
    num: "01",
    heading: "Seamless Power Backup",
    body: "Runs ACs, geysers, and appliances during any power cut — automatically, with zero interruption in just 10ms.",
    stat: "10ms",
    statLabel: "Transfer Time",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bg: "bg-primary",
    accent: "text-secondary",
  },
  {
    num: "02",
    heading: "Solar Integration",
    body: "Stores excess solar energy and uses it at night or on cloudy days — maximizing every watt of your solar investment.",
    stat: "MPPT",
    statLabel: "Solar Charger",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="4" strokeWidth={2} />
        <path strokeLinecap="round" strokeWidth={2} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    bg: "bg-secondary",
    accent: "text-primary",
  },
  {
    num: "03",
    heading: "Smart App Control",
    body: "Monitor battery levels, track solar input, and manage energy usage from anywhere via the Spider Connect platform.",
    stat: "24/7",
    statLabel: "Remote Access",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeWidth={2} d="M12 18h.01" />
        <path strokeLinecap="round" strokeWidth={2} d="M9 6h6" />
      </svg>
    ),
    bg: "bg-primary",
    accent: "text-secondary",
  },
];

const BessPillars = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-12"
      >
        <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
          Core Capabilities
        </motion.span>
        <motion.h2 variants={fadeUp} className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
          Why Spider BESS?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
          Three pillars that set Spider BESS apart from every conventional inverter on the market.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid sm:grid-cols-3 gap-6"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.num}
            variants={scaleUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
          >
            {/* Top accent bar */}
            <div className={`${p.bg} p-6 flex items-start justify-between`}>
              <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center">
                {p.icon}
              </div>
              <span className="text-white/30 text-4xl font-black">{p.num}</span>
            </div>

            {/* Stat callout */}
            <div className={`${p.bg} px-6 pb-5`}>
              <div className={`inline-flex items-baseline gap-1.5 bg-white/10 rounded-xl px-4 py-2`}>
                <span className={`text-2xl font-extrabold ${p.accent}`}>{p.stat}</span>
                <span className="text-white/70 text-xs font-medium">{p.statLabel}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.heading}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default BessPillars;
