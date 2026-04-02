import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../../utils/animationConfig";
import { comparisonModels } from "../../data/bessComparison";

const BessComparison = () => {
  const [activeModel, setActiveModel] = useState("spidervault-3");
  const model = comparisonModels.find((m) => m.id === activeModel) || comparisonModels[0];

  return (
    <section className="py-16 sm:py-20 bg-[#F3F5F8]">
      <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10"
        >
          <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Side by Side
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            SpiderVault vs Conventional
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
            See how SpiderVault compares to what you might be using today.
          </motion.p>
        </motion.div>

        {/* Model selector pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {comparisonModels.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModel(m.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                activeModel === m.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {m.productName}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
          >
          <div className="bg-white min-w-140">
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm font-bold">
              <div className="px-5 py-4 bg-gray-50 text-gray-500 border-b border-gray-200 uppercase tracking-wider text-xs">
                Feature
              </div>
              <div className="px-5 py-4 bg-primary text-white border-b border-primary/20 flex items-center gap-2">
                <span className="text-secondary">✓</span>
                {model.productName}
              </div>
              <div className="px-5 py-4 bg-gray-100 text-gray-600 border-b border-gray-200">
                {model.versus}
              </div>
            </div>

            {/* Rows */}
            {model.rows.map((row, ri) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 text-sm border-b border-gray-50 last:border-0 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <div className="px-5 py-3.5 text-gray-500 font-medium text-xs border-r border-gray-100">
                  {row.label}
                </div>
                <div className="px-5 py-3.5 text-secondary font-semibold border-r border-gray-100 flex items-start gap-1.5">
                  <span className="text-secondary shrink-0 mt-0.5">✓</span>
                  {row.spider}
                </div>
                <div className="px-5 py-3.5 text-gray-400 flex items-start gap-1.5">
                  <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                  {row.conventional}
                </div>
              </div>
            ))}
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BessComparison;
