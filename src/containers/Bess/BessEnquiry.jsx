import { useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewport } from "../../utils/animationConfig";

const checkIcon = (
  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const contactInfo = [
  { icon: "💬", label: "WhatsApp", value: "+91 9997776080", href: "https://wa.me/919997776080" },
  { icon: "✉️", label: "Email", value: "connect@spiderenergy.in", href: "mailto:connect@spiderenergy.in" },
  { icon: "🕐", label: "Support Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM IST" },
];

const INITIAL_FORM = {
  name: "", mobile: "", email: "",
  propertyType: "", interestedIn: "", solarPanels: "", message: "",
};

const BessEnquiry = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.mobile.trim()) e.mobile = "Mobile is required";
    if (!form.email.trim()) e.email = "Email is required";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const field = (name) => ({
    value: form[name],
    onChange: (e) => setForm({ ...form, [name]: e.target.value }),
  });

  const inputClass = (name) =>
    `w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors ${errors[name] ? "border-red-400" : "border-gray-200"}`;

  return (
    <section id="enquiry" className="py-16 sm:py-20 bg-white">
      <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Get Started
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Get a Free BESS Consultation
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
            Tell us about your energy needs and we'll recommend the right SpiderVault for you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Form */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary/10 border border-secondary rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">Our SpiderVault specialist will reach out within 24–48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" {...field("name")} placeholder="Enter your full name" className={inputClass("name")} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                  <input type="tel" {...field("mobile")} placeholder="+91 XXXXX XXXXX" className={inputClass("mobile")} />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" {...field("email")} placeholder="Enter your email" className={inputClass("email")} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Property Type</label>
                  <select {...field("propertyType")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors bg-white text-gray-700">
                    <option value="">Select property type</option>
                    {["Home", "Apartment", "Office", "Commercial", "Industrial"].map(v => <option key={v} value={v.toLowerCase()}>{v}</option>)}
                  </select>
                </div>

                {/* Interested In */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Interested In</label>
                  <select {...field("interestedIn")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors bg-white text-gray-700">
                    <option value="">Select a model</option>
                    {["SpiderVault 3.0","SpiderVault 5.0","SpiderVault 12.0","SpiderVault 20.0","SpiderVault 30.0","SpiderVault 60.0","SpiderVault 120.0","Not Sure Yet"].map(v => (
                      <option key={v} value={v.toLowerCase().replace(/\s/g,"-")}>{v}</option>
                    ))}
                  </select>
                </div>

                {/* Solar Panels radio */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have solar panels?</label>
                  <div className="flex flex-wrap gap-4">
                    {["Yes", "No", "Planning to install"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="solarPanels"
                          value={opt}
                          checked={form.solarPanels === opt}
                          onChange={() => setForm({ ...form, solarPanels: opt })}
                          className="accent-primary w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea rows={4} {...field("message")} placeholder="Tell us about your energy needs..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-base">
                  Request Consultation
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport}
            className="flex flex-col justify-center gap-8"
          >
            <div className="hidden sm:flex bg-primary/5 rounded-2xl border border-primary/10 min-h-[200px] items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-2">🔋</div>
                <p className="text-sm">SpiderVault Installation</p>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">{item.icon}</div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-primary font-semibold text-sm mt-0.5 hover:underline block">{item.value}</a>
                      : <div className="text-gray-900 font-semibold text-sm mt-0.5">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h4 className="font-bold text-gray-900 mb-4">Why Choose SpiderVault?</h4>
              <ul className="space-y-2.5">
                {[
                  "Free site assessment & recommendation",
                  "Professional installation by certified engineers",
                  "End-to-end monitoring via Spider Connect",
                  "5-year standard warranty included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">{checkIcon}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BessEnquiry;
