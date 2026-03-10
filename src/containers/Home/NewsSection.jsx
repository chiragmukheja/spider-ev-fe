import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, scaleUp, staggerContainer, staggerFast } from "../../utils/animationConfig";

const latestNews = [
  {
    id: 1,
    category: "Partnerships",
    title: "SpiderEV partners with India Post to deploy EV chargers at 500+ post offices across India",
    date: "15 Jan 2026",
  },
  {
    id: 2,
    category: "Product Launches",
    title: "SpiderEV launches Spider Ultra — India's first 240 kW DC ultra-rapid charger",
    date: "20 Dec 2025",
  },
  {
    id: 3,
    category: "Government",
    title: "SpiderEV selected as preferred charging infrastructure partner under FAME II scheme",
    date: "10 Dec 2025",
  },
];

const categoryColors = {
  Partnerships: "bg-blue-100 text-blue-700",
  "Product Launches": "bg-secondary/10 text-secondary",
  Government: "bg-purple-100 text-purple-700",
  Awards: "bg-yellow-100 text-yellow-700",
  Expansions: "bg-orange-100 text-orange-700",
};

const NewsSection = () => {
  return (
    <section className="w-full bg-[#F3F5F8] py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-end justify-between mb-10 lg:mb-12"
        >
          <div>
            <motion.p variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
              Latest Updates
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2f3236] leading-tight">
              In the News
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              to="/news"
              className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors group"
            >
              View All News
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* News Cards */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {latestNews.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image placeholder */}
              <div className="bg-gray-100 h-44 flex items-center justify-center">
                <div className="text-center text-gray-300">
                  <svg className="w-10 h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2v6h6" />
                  </svg>
                  <p className="text-xs">News Image</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category] || "bg-gray-100 text-gray-600"}`}>
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h3 className="font-semibold text-[#2f3236] leading-snug text-sm flex-1">
                  {item.title}
                </h3>
                <Link
                  to="/news"
                  className="mt-4 inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors group"
                >
                  Read More
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 text-center sm:hidden"
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            View All News
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
