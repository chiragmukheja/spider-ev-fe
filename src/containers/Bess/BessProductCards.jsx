import { motion } from "framer-motion";
import { fadeUp, scaleUp, staggerContainer, staggerFast, viewport } from "../../utils/animationConfig";
import { bessProducts } from "../../data/bessProducts";

const checkIcon = (
  <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const BatteryIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 64 64" stroke="currentColor">
    <rect x="6" y="16" width="46" height="32" rx="4" strokeWidth="3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M52 26v12M26 28v8M34 24v16M18 28v8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M56 26v12" />
  </svg>
);

const productMeta = {
  "bess-3": { featured: false, gradient: "from-primary/10 via-primary/5 to-transparent", accentBg: "bg-primary/10", ringColor: "ring-primary/20" },
  "bess-7": { featured: true,  gradient: "from-secondary/15 via-secondary/5 to-transparent", accentBg: "bg-secondary/10", ringColor: "ring-secondary/30" },
  "bess-15":{ featured: false, gradient: "from-primary/10 via-primary/5 to-transparent", accentBg: "bg-primary/10", ringColor: "ring-primary/20" },
};

const BessProductCards = ({ activeProduct, onProductSelect }) => (
  <section id="bess-products" className="py-16 sm:py-20 bg-[#F3F5F8]">
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-12"
      >
        <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
          Product Range
        </motion.span>
        <motion.h2 variants={fadeUp} className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
          Our BESS Products
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-500 mt-3">
          Three models. Every need covered.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {bessProducts.map((product) => {
          const isActive = activeProduct === product.id;
          const meta = productMeta[product.id];
          return (
            <motion.div
              key={product.id}
              variants={scaleUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                meta.featured
                  ? "ring-2 ring-secondary shadow-xl"
                  : isActive
                  ? "ring-2 ring-primary shadow-lg"
                  : "border border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Popular badge */}
              {meta.featured && (
                <div className="absolute top-4 right-4 z-10 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Image / hero area */}
              <div className={`relative bg-gradient-to-br ${meta.gradient} px-6 pt-8 pb-4 flex flex-col items-center`}>
                {/* Capacity display */}
                <div className="text-center mb-3">
                  <span className={`text-5xl font-extrabold ${meta.featured ? "text-secondary" : "text-primary"}`}>
                    {product.capacity}
                  </span>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium uppercase tracking-wider">Storage Capacity</div>
                </div>

                {/* Battery SVG */}
                <BatteryIcon className={`w-20 h-20 ${meta.featured ? "text-secondary/40" : "text-primary/30"}`} />

                {/* Backup time pill */}
                <div className={`mt-3 px-3 py-1 rounded-full text-xs font-semibold ${meta.accentBg} ${meta.featured ? "text-secondary" : "text-primary"}`}>
                  {product.backupTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  <span className="font-medium text-gray-700">Best for:</span> {product.bestFor}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-4" />

                {/* Feature ticks */}
                <ul className="space-y-2 mb-6">
                  {[product.installStyle, "Solar Ready", "Smart AI Control", "5th Gen BMS"].map((f) => (
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
                    className={`w-full py-3 rounded-xl font-semibold transition-all text-sm ${
                      meta.featured
                        ? isActive
                          ? "bg-secondary text-white"
                          : "bg-secondary text-white hover:bg-secondary/90"
                        : isActive
                        ? "bg-primary text-white"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {isActive ? "View Specs ↓" : "Know More"}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default BessProductCards;
