import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer, viewport } from "../../utils/animationConfig";
import heroBg from "../../assets/home/hero-bg.png";

const features = [
  "Real-time battery monitoring",
  "Solar input tracking",
  "Energy usage analytics",
  "Smart automation & alerts",
];

const checkIcon = (
  <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const BessAppSection = () => (
  <section
    className="relative overflow-hidden py-16 sm:py-20"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-primary/85" />
    <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Monitor & Control
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl sm:text-4xl font-bold text-white leading-tight">
            Power at Your Fingertips
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-white/80 leading-relaxed">
            Monitor your battery levels, track solar input, and control your energy usage anytime — from
            anywhere — with the Spider Connect App.
          </motion.p>
          <motion.ul variants={staggerContainer} className="mt-6 space-y-2">
            {features.map((f) => (
              <motion.li key={f} variants={fadeUp} className="flex items-center gap-3 text-white/80">
                <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  {checkIcon}
                </span>
                {f}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.33.18.72.18 1.06.01l11.37-6.57-2.46-2.46-9.97 9.02zM.5 1.4C.19 1.76 0 2.27 0 2.93v18.14c0 .66.19 1.17.5 1.53l.08.08 10.16-10.16v-.24L.58 1.32.5 1.4zM19.43 10.23l-2.82-1.63-2.76 2.76 2.76 2.76 2.84-1.64c.81-.47.81-1.23-.02-1.25zM4.24.24L15.61 6.8l-2.46 2.46L3.18.24C3.52.06 3.91.06 4.24.24z" />
              </svg>
              Google Play
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.22 1.3-2.2 3.88.03 3.06 2.69 4.08 2.72 4.1l-.07.24zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          </motion.div>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="hidden lg:flex rounded-2xl bg-white/10 border border-white/20 h-72 items-center justify-center"
        >
          <div className="text-center text-white/40">
            <div className="text-5xl mb-2">📱</div>
            <p className="text-sm">App Mockup</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BessAppSection;
