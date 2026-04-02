import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, scaleUp, staggerContainer, staggerFast, viewport } from "../../utils/animationConfig";
import { residentialProducts, commercialProducts } from "../../data/bessProducts";

const checkIcon = (
  <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const ProductCard = ({ product, onProductSelect, index }) => (
  <motion.div
    variants={scaleUp}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
  >
    {/* Image / hero area */}
    <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-6 pt-8 pb-4 flex flex-col items-center">
      <div className="text-center mb-3">
        <span className="text-5xl font-extrabold text-primary">{product.capacity}</span>
        <div className="text-xs text-gray-500 mt-0.5 font-medium uppercase tracking-wider">Storage</div>
      </div>
      <div className="text-5xl mb-2">🔋</div>
      <div className="mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
        {product.backupTime}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        <span className="bg-secondary text-white text-xs font-semibold px-2.5 py-1 rounded-full shrink-0">
          {product.ratedPower}
        </span>
      </div>
      <p className="text-gray-500 text-xs mb-1 italic">{product.tagline}</p>
      <p className="text-gray-600 text-sm mb-4">
        <span className="font-medium text-gray-700">Best for:</span> {product.bestFor}
      </p>

      <div className="border-t border-gray-100 mb-4" />

      <ul className="space-y-2 mb-6">
        {[product.installStyle, "Solar Ready (MPPT)", "5th Gen BMS"].map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
            <span className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              {checkIcon}
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <button
          onClick={() => onProductSelect(product.id)}
          className="w-full border-2 border-primary text-primary px-4 py-2.5 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors text-sm"
        >
          Know More
        </button>
      </div>
    </div>
  </motion.div>
);

const BessProductTabs = ({ onProductSelect }) => {
  const [activeTier, setActiveTier] = useState("residential");
  const products = activeTier === "residential" ? residentialProducts : commercialProducts;

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#F3F5F8]">
      <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10"
        >
          <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Product Range
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Our SpiderVault Range
          </motion.h2>
        </motion.div>

        {/* Segment tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-2xl border border-gray-200 p-1 shadow-sm">
            {[
              { key: "residential", label: "Residential" },
              { key: "commercial", label: "Commercial & Industrial" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTier(tab.key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTier === tab.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} onProductSelect={onProductSelect} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BessProductTabs;
