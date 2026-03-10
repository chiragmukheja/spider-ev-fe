import { motion } from "framer-motion";
import PageLayout from "../../components/layout/PageLayout";
import HeroBanner from "../../components/ui/HeroBanner";
import { fadeUp, fadeLeft, fadeRight, scaleUp, staggerContainer, staggerFast, viewport } from "../../utils/animationConfig";
import appImg from "../../assets/home/SpiderApp.jpg";
import heroBg from "../../assets/home/hero-bg.png";

const appFeatures = [
  { icon: "📍", title: "Locate Stations", desc: "Find EV charging stations near you on an interactive map." },
  { icon: "🗺️", title: "Route Planning", desc: "Plan routes with charger stops built in — never run out of charge." },
  { icon: "🟢", title: "Live Availability", desc: "Real-time station availability — see which chargers are free before you arrive." },
  { icon: "⚡", title: "Session Tracking", desc: "Monitor your charging session live — power, time, and cost in real time." },
  { icon: "💳", title: "Easy Payment", desc: "Pay seamlessly via UPI, credit/debit cards, and digital wallets." },
  { icon: "🌐", title: "9 Languages", desc: "Available in 9 regional Indian languages for a truly local experience." },
  { icon: "🚗", title: "EV Filters", desc: "Customizable filters by EV type, charger power, and connector standard." },
  { icon: "⏰", title: "Schedule Charging", desc: "Reserve a charging slot in advance and schedule your session remotely." },
  { icon: "📊", title: "Live Power Monitor", desc: "Track live power usage and energy consumed per session." },
];

const SpiderEVAppPage = () => {
  return (
    <PageLayout>
      <HeroBanner
        title="SpiderEV App — Scan, Charge, Pay"
        subtitle="Find EV charging stations near you. A seamless experience that lets you power up quickly and pay effortlessly."
        bgImage={appImg}
      />

      {/* App Intro */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">Mobile App</motion.span>
              <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Your EV Charging Companion
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-gray-600 text-lg leading-relaxed">
                The SpiderEV app puts the entire SpiderEV charging network at your fingertips.
                From discovering stations to completing payment — everything happens in the app,
                making EV ownership in India simpler than ever.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-gray-600 leading-relaxed">
                Available in 9 regional languages, with support for all major payment methods and
                every EV type — SpiderEV App is built for Bharat.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.33.18.72.18 1.06.01l11.37-6.57-2.46-2.46-9.97 9.02zM.5 1.4C.19 1.76 0 2.27 0 2.93v18.14c0 .66.19 1.17.5 1.53l.08.08 10.16-10.16v-.24L.58 1.32.5 1.4zM19.43 10.23l-2.82-1.63-2.76 2.76 2.76 2.76 2.84-1.64c.81-.47.81-1.23-.02-1.25zM4.24.24L15.61 6.8l-2.46 2.46L3.18.24C3.52.06 3.91.06 4.24.24z"/>
                  </svg>
                  Google Play
                </a>
                <a href="#" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.22 1.3-2.2 3.88.03 3.06 2.69 4.08 2.72 4.1l-.07.24zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={appImg} alt="SpiderEV App" className="w-full h-[420px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900">Everything You Need to Charge</motion.h2>
          </motion.div>
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {appFeatures.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4"
              >
                <div className="text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 text-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">Download SpiderEV App Today</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 mb-10 max-w-xl mx-auto">
              Join thousands of EV drivers across India who charge smarter with the SpiderEV app.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              {[
                { label: "Google Play", sub: "Get it on" },
                { label: "App Store", sub: "Download on the" },
              ].map((btn) => (
                <a key={btn.label} href="#" className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                  <div className="text-left">
                    <div className="text-xs text-gray-500">{btn.sub}</div>
                    <div className="font-bold">{btn.label}</div>
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SpiderEVAppPage;
