import { useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewport } from "../../utils/animationConfig";

const checkIcon = (
  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const contactInfo = [
  { icon: "📞", label: "Phone", value: "+91 1800-XXX-XXXX" },
  { icon: "✉️", label: "Email", value: "info@spiderev.in" },
  { icon: "🕐", label: "Support Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM IST" },
];

const BessEnquiry = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    propertyType: "",
    interestedIn: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.mobile.trim()) e.mobile = "Mobile number is required";
    if (!form.email.trim()) e.email = "Email is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="bess-enquiry" className="py-16 sm:py-20 bg-[#F3F5F8]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get a Free BESS Consultation
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
            Tell us about your energy needs and we'll recommend the right Spider BESS for you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary/10 border border-secondary rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">
                  Our BESS specialist will reach out within 24–48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors ${errors.name ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors ${errors.mobile ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors ${errors.email ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Property Type</label>
                  <select
                    value={form.propertyType}
                    onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors bg-white text-gray-700"
                  >
                    <option value="">Select property type</option>
                    <option value="home">Home</option>
                    <option value="apartment">Apartment</option>
                    <option value="office">Office</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                {/* Interested In */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Interested In</label>
                  <select
                    value={form.interestedIn}
                    onChange={(e) => setForm({ ...form, interestedIn: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors bg-white text-gray-700"
                  >
                    <option value="">Select a product</option>
                    <option value="bess-3">Spider BESS 3.0</option>
                    <option value="bess-7">Spider BESS 7.0</option>
                    <option value="bess-15">Spider BESS 15.0</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your energy needs..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-base"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col justify-center gap-8"
          >
            {/* Image placeholder */}
            <div className="hidden sm:flex bg-white rounded-2xl border border-gray-100 shadow-sm h-56 items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-5xl mb-2">🔋</div>
                <p className="text-sm">Spider BESS Installation</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                    <div className="text-gray-900 font-semibold text-sm mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why choose us bullets */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h4 className="font-bold text-gray-900 mb-4">Why Choose Spider BESS?</h4>
              <ul className="space-y-2.5">
                {[
                  "Free consultation & site assessment",
                  "Professional installation by certified engineers",
                  "End-to-end support & monitoring",
                  "5-year standard warranty included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      {checkIcon}
                    </span>
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
