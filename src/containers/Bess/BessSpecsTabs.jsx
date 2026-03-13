import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "../../utils/animationConfig";
import { bessProducts } from "../../data/bessProducts";

const specGroups = [
  {
    label: "General",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-secondary",
    keys: [
      ["Rated Power", "ratedPower"],
      ["Surge Power", "surgePower"],
      ["Efficiency", "efficiency"],
      ["Transfer Time", "transferTime"],
      ["Waveform", "waveform"],
      ["Switching Modes", "switchingModes"],
    ],
  },
  {
    label: "Input",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
    color: "text-blue-500",
    keys: [
      ["Input Voltage", "inputVoltage"],
      ["Voltage Range", "voltageRange"],
      ["Frequency", "frequency"],
    ],
  },
  {
    label: "Solar Charger",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="4" strokeWidth={2} />
        <path strokeLinecap="round" strokeWidth={2} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    color: "text-amber-500",
    keys: [
      ["MPPT Count", "mpptCount"],
      ["Max PV Power", "maxPVPower"],
      ["Max Solar Charge Current", "maxSolarCharge"],
    ],
  },
  {
    label: "Battery",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="2" y="7" width="18" height="11" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 11v3M7 11v3M12 11v3" />
      </svg>
    ),
    color: "text-secondary",
    keys: [
      ["Technology", "batteryTech"],
      ["Quantity", "batteryQty"],
      ["Nominal Voltage", "nominalVoltage"],
      ["Max Discharge Current", "maxDischarge"],
    ],
  },
  {
    label: "Protection & Build",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "text-primary",
    keys: [
      ["BMS", "bms"],
      ["IP Rating", "ipRating"],
      ["Installation Style", null],
      ["Dimensions", "dimensions"],
      ["Weight", "weight"],
      ["Certifications", "certifications"],
    ],
  },
  {
    label: "Warranty",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "text-secondary",
    keys: [
      ["Standard Warranty", "standardWarranty"],
      ["Extended Warranty", "extendedWarranty"],
    ],
  },
];

const highlights = (product) => [
  { label: "Efficiency", value: product.specs.efficiency, sub: "Pure Sine Wave", color: "from-secondary/20 to-secondary/5", accent: "text-secondary" },
  { label: "Transfer Time", value: product.specs.transferTime, sub: "Uninterrupted power", color: "from-primary/20 to-primary/5", accent: "text-primary" },
  { label: "IP Rating", value: product.specs.ipRating, sub: "Dust & water proof", color: "from-blue-500/20 to-blue-500/5", accent: "text-blue-600" },
  { label: "Warranty", value: product.specs.standardWarranty, sub: `Extendable to ${product.specs.extendedWarranty}`, color: "from-amber-500/20 to-amber-500/5", accent: "text-amber-600" },
];

const getValue = (key, product) => {
  if (key === null) return product.installStyle;
  return product.specs[key] || "—";
};

const BessSpecsTabs = ({ activeProduct, onTabChange }) => {
  const product = bessProducts.find((p) => p.id === activeProduct) || bessProducts[0];
  const hl = highlights(product);

  return (
    <section id="bess-specs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10"
        >
          <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Deep Dive
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Technical Specifications
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mt-3">
            Select a model below to explore its full spec sheet.
          </motion.p>
        </motion.div>

        {/* Tab bar — card style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {bessProducts.map((p) => {
            const isActive = activeProduct === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onTabChange(p.id)}
                className={`relative rounded-2xl p-4 text-left transition-all duration-300 border-2 overflow-hidden ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-lg"
                    : "border-gray-200 bg-white text-gray-700 hover:border-primary/50 hover:shadow-sm"
                }`}
              >
                {p.id === "bess-7" && (
                  <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-secondary text-white" : "bg-secondary/10 text-secondary"}`}>
                    Popular
                  </span>
                )}
                <div className={`text-2xl font-extrabold ${isActive ? "text-secondary" : "text-primary"}`}>
                  {p.capacity}
                </div>
                <div className={`text-sm font-semibold mt-0.5 ${isActive ? "text-white" : "text-gray-900"}`}>
                  {p.name}
                </div>
                <div className={`text-xs mt-1 ${isActive ? "text-white/70" : "text-gray-500"}`}>
                  {p.backupTime}
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {/* Key Highlights strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {hl.map((h) => (
                <div
                  key={h.label}
                  className={`bg-gradient-to-br ${h.color} rounded-2xl p-5 border border-gray-100`}
                >
                  <div className={`text-2xl font-extrabold ${h.accent}`}>{h.value}</div>
                  <div className="text-gray-800 text-sm font-semibold mt-1">{h.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>

            {/* Spec groups — 2-column on desktop */}
            <div className="grid lg:grid-cols-2 gap-4 items-start">
              {specGroups.map((group) => (
                <div key={group.label} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  {/* Group header */}
                  <div className="flex items-center gap-2.5 px-5 py-3.5 bg-gray-50 border-b border-gray-200">
                    <span className={`${group.color}`}>{group.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
                      {group.label}
                    </span>
                  </div>
                  {/* Rows */}
                  <div>
                    {group.keys.map(([label, key], ri) => (
                      <div
                        key={label}
                        className={`flex items-center justify-between px-5 py-3 text-sm border-b border-gray-50 last:border-0 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                      >
                        <span className="text-gray-500 pr-4">{label}</span>
                        <span className="text-gray-900 font-semibold text-right">{getValue(key, product)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Downloads bar */}
            <div className="mt-6 bg-primary rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-white font-bold">{product.name} — Downloads</div>
                <div className="text-white/60 text-sm">Official documents for your reference or installer</div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={product.downloads.dataSheet}
                  className="flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Data Sheet
                </a>
                <a
                  href={product.downloads.brochure}
                  className="flex items-center gap-2 border-2 border-white/40 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Brochure
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BessSpecsTabs;
