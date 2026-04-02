import { motion } from "framer-motion";
import { scaleUp, staggerContainer, staggerFast, fadeUp, viewport } from "../../utils/animationConfig";

const pillars = [
  {
    num: "01",
    icon: "⚡",
    heading: "10ms Transfer Time",
    body: "Switches to battery so fast you'll never feel a power cut — ACs keep running, work keeps going.",
    stat: "10ms",
    statLabel: "Zero-felt switchover",
    bg: "bg-primary",
    accent: "text-secondary",
  },
  {
    num: "02",
    icon: "☀️",
    heading: "Solar Ready, Always",
    body: "Built-in MPPT charger stores solar energy during the day for use at night or on cloudy days.",
    stat: "MPPT",
    statLabel: "Built-in solar charger",
    bg: "bg-secondary",
    accent: "text-white",
  },
  {
    num: "03",
    icon: "📱",
    heading: "Monitor From Anywhere",
    body: "Spider Connect app gives you live battery level, solar input, and energy usage data on your phone.",
    stat: "24/7",
    statLabel: "Remote monitoring",
    bg: "bg-primary",
    accent: "text-secondary",
  },
];

const BessPillars = () => (
  <section className="py-16 sm:py-20 bg-[#F3F5F8]">
    <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-10">
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
          Why SpiderVault?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
          Three pillars that make SpiderVault the smartest power backup decision for your home or business.
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
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
          >
            <div className={`${p.bg} p-6 flex items-start justify-between`}>
              <div className="text-4xl">{p.icon}</div>
              <span className="text-white/25 text-4xl font-black">{p.num}</span>
            </div>
            <div className={`${p.bg} px-6 pb-5`}>
              <div className="inline-flex items-baseline gap-1.5 bg-white/10 rounded-xl px-4 py-2">
                <span className={`text-xl font-extrabold ${p.accent}`}>{p.stat}</span>
                <span className="text-white/70 text-xs font-medium">{p.statLabel}</span>
              </div>
            </div>
            <div className="p-6">
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
