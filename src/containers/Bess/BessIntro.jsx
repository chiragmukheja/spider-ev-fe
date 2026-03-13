import { motion } from "framer-motion";
import { fadeUp, fadeRight, staggerContainer, staggerFast, viewport } from "../../utils/animationConfig";

const quickStats = [
  { value: "97%", label: "Efficiency" },
  { value: "10ms", label: "Transfer" },
  { value: "IP65", label: "Protection" },
  { value: "5 Yrs", label: "Warranty" },
];

const BessIntro = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F3F5F8]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span
              variants={fadeUp}
              className="text-secondary font-semibold text-sm uppercase tracking-wider"
            >
              India's Smartest Home Power Backup
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            >
              Seamless Backup.{" "}
              <span className="text-primary">Solar Ready.</span>{" "}
              <span className="text-secondary">Smart.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-gray-600 text-lg leading-relaxed"
            >
              Spider BESS combines a high-performance inverter, lithium battery,
              and solar charger into one sleek unit. Power your ACs, geysers,
              and appliances through any outage — automatically, silently,
              instantly.
            </motion.p>

            {/* Quick stats row */}
            <motion.div variants={staggerFast} className="mt-8 grid grid-cols-4 gap-3">
              {quickStats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm"
                >
                  <div className="text-primary text-xl font-extrabold">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <button
                onClick={() => scrollTo("bess-products")}
                className="border-2 border-primary text-primary px-7 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Explore Products
              </button>
            </motion.div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-primary rounded-2xl p-8 text-center relative overflow-hidden">
              {/* Decorative rings */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-secondary/10" />

              <div className="relative z-10">
                <div className="text-7xl mb-4">🔋</div>
                <div className="text-secondary text-4xl font-extrabold">Spider BESS</div>
                <div className="text-white/70 text-sm mt-2">Lithium Ion · BIS Certified · Made in India</div>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["Pure Sine Wave", "On/Off/Hybrid", "MPPT Solar", "5th Gen BMS"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-2xl font-extrabold leading-none">5K+</div>
              <div className="text-xs text-white/80 mt-0.5">Units Deployed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BessIntro;
