import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/home/spider-ev-logo.png";
import Accordion from "../components/ui/Accordion";
import { fadeUp, fadeLeft, fadeRight, scaleUp, staggerContainer, staggerFast, viewport } from "../utils/animationConfig";
import heroBg from "../assets/home/hero-bg.png";

const heroSlides = [
  "India's EV industry is booming! Partner with SpiderEV to leverage our support.",
  "Secure your stake in the EV revolution — double your investment in 5 years.",
  "Step into the future of Green Mobility with SpiderEV Franchise.",
];

const investmentTiers = [
  { tier: "Gold", investment: "₹30+ Lakhs", color: "from-yellow-500 to-yellow-600", features: ["1–2 DC Chargers", "Setup & Maintenance", "App Listing", "Local Marketing"] },
  { tier: "Titanium", investment: "₹60+ Lakhs", color: "from-gray-500 to-gray-700", features: ["3–5 DC Chargers", "Setup & Maintenance", "App Listing", "Regional Marketing", "Priority Support"] },
  { tier: "Platinum", investment: "₹1+ Crore", color: "from-primary to-blue-900", featured: true, features: ["6+ DC Chargers", "Full Setup & Ops", "App Listing", "National Marketing", "Dedicated Manager", "Revenue Guarantee"] },
];

const whyInvest = [
  { icon: "💰", title: "Guaranteed Annual Returns", desc: "Predictable returns backed by our revenue-sharing model and growing EV adoption." },
  { icon: "🛠️", title: "End-to-End Setup & Maintenance", desc: "SpiderEV handles everything — from installation to daily operations and maintenance." },
  { icon: "📱", title: "Business Support & Tech", desc: "Spider Connect CPMS, payment gateway, and app listing included from day one." },
  { icon: "📣", title: "Brand & Promotions", desc: "Leverage SpiderEV's national brand, marketing campaigns, and app visibility." },
  { icon: "🇮🇳", title: "Decade's Opportunity", desc: "India's EV market is growing at 44% CAGR — get in early and ride the wave." },
  { icon: "⚡", title: "Live in Just 60 Days", desc: "From contract signing to first revenue — your station goes live in 60 days." },
];

const faqItems = [
  {
    question: "I have land but no power connection — can I still start?",
    answer: "Yes. SpiderEV's EPC team will assess your site and help arrange the power connection as part of the project. We handle all electrical infrastructure requirements.",
  },
  {
    question: "I don't have land but want to invest — is that possible?",
    answer: "Yes. SpiderEV has tie-ups with property owners across India. We can help match you with suitable locations based on your investment tier and preferred city.",
  },
  {
    question: "Do I need to manage daily operations or hire staff?",
    answer: "No. SpiderEV's operations team manages the station remotely via Spider Connect. For on-ground support, our maintenance network covers 15+ cities.",
  },
  {
    question: "What size of land is required?",
    answer: "A minimum of 1,000 sq ft is ideal for a starter station. Larger formats (Titanium, Platinum) may need 2,000–5,000 sq ft. We'll assess your land during the site survey.",
  },
  {
    question: "Will SpiderEV help with marketing and promotions?",
    answer: "Yes. All franchise partners benefit from SpiderEV's national marketing campaigns, app listing, Google Maps listing, and local launch promotions.",
  },
  {
    question: "What makes SpiderEV different from others in the EV sector?",
    answer: "SpiderEV is a vertically integrated company — we manufacture our own chargers, operate our own software (Spider Connect), and deploy our own stations. No third-party dependencies mean better pricing, faster resolution, and higher uptime.",
  },
  {
    question: "Do I need technical knowledge to run a SpiderEV station?",
    answer: "No technical knowledge is required. The SpiderEV app and Spider Connect platform are designed to be operator-friendly. Our team trains you on everything at launch.",
  },
];

const FranchisePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Minimal Navbar */}
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <Link to="/">
          <img src={logo} alt="SpiderEV" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="tel:+911800000000" className="hover:text-primary transition-colors">+91 1800-XXX-XXXX</a>
          <a href="mailto:franchise@spiderev.in" className="hover:text-primary transition-colors hidden sm:block">franchise@spiderev.in</a>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative overflow-hidden py-24 sm:py-32 text-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/80" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative max-w-4xl mx-auto px-4"
        >
          <motion.div variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Franchise Opportunity
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            {heroSlides[currentSlide]}
          </motion.h1>
          <motion.div variants={fadeUp} className="flex justify-center gap-2 mb-8">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-1.5 rounded-full transition-all ${currentSlide === i ? "bg-secondary w-8" : "bg-white/30"}`}
              />
            ))}
          </motion.div>
          <motion.a
            variants={fadeUp}
            href="#contact-form"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-secondary/90 transition-colors"
          >
            Become a Franchisee
          </motion.a>
        </motion.div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Contact Form + Intro Grid */}
        <div className="grid lg:grid-cols-3 gap-12 py-16 sm:py-20" id="contact-form">
          {/* Intro */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-2"
          >
            <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">Join SpiderEV</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Become a SpiderEV Franchisee
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-gray-600 text-lg leading-relaxed">
              India's EV charging market is at a tipping point. With government mandates, rising fuel
              costs, and a rapidly growing EV fleet, the demand for charging infrastructure has never
              been higher — or more profitable.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-gray-600 leading-relaxed">
              SpiderEV's franchise model lets you tap into this massive opportunity with our end-to-end
              support — from site survey and installation to ongoing operations and marketing. You invest,
              we manage, you earn.
            </motion.p>

            {/* EV Industry Stats */}
            <motion.div variants={staggerFast} className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { num: "44%", label: "EV market CAGR (2020–2027)" },
                { num: "$47.3B", label: "Projected market size by 2027" },
                { num: "30%", label: "Government target — EVs by 2030" },
                { num: "4L+", label: "Charging stations needed by 2030" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={scaleUp}
                  whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="text-3xl font-extrabold text-primary">{s.num}</div>
                  <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Sticky Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 lg:sticky lg:top-28">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enquire Now</h3>
              <p className="text-gray-500 text-sm mb-6">Our franchise team will contact you within 24 hours.</p>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="font-semibold text-gray-900">Thank you! We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { name: "phone", label: "Mobile Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
                      <input
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        value={form[f.name]}
                        onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your investment interest..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                    Submit Enquiry
                  </button>
                  <a
                    href="#"
                    className="block w-full text-center border-2 border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors text-sm"
                  >
                    📄 Download Brochure (PDF)
                  </a>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Investment Tiers */}
        <section className="py-16 sm:py-20 border-t border-gray-100">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900">Investment Tiers</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3">Choose the investment level that fits your ambition.</motion.p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {investmentTiers.map((tier) => (
              <motion.div
                key={tier.tier}
                variants={scaleUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`rounded-2xl overflow-hidden shadow-sm ${tier.featured ? "ring-2 ring-primary shadow-xl md:scale-105" : "border border-gray-100"}`}
              >
                <div className={`bg-gradient-to-br ${tier.color} px-8 py-8 text-center`}>
                  {tier.featured && (
                    <div className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-extrabold text-white">{tier.tier}</h3>
                  <div className="text-white/90 text-3xl font-bold mt-2">{tier.investment}</div>
                </div>
                <div className="p-8 bg-white">
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full py-3 rounded-xl font-semibold transition-colors ${tier.featured ? "bg-primary text-white hover:bg-primary/90" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Invest */}
        <section className="py-16 sm:py-20 border-t border-gray-100">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Invest With SpiderEV?</h2>
          </motion.div>
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyInvest.map((w) => (
              <motion.div
                key={w.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="py-16 sm:py-20 border-t border-gray-100"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Accordion items={faqItems} />
            </motion.div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="py-12 border-t border-gray-100 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Are you ready to join the SpiderEV family as a franchisee?
          </motion.h2>
          <motion.a
            variants={fadeUp}
            href="#contact-form"
            className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            Enquire Now
          </motion.a>
        </motion.section>
      </div>

      {/* Standalone Footer */}
      <footer className="bg-primary text-white py-8 mt-4">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <span>© {new Date().getFullYear()} SpiderEV. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FranchisePage;
