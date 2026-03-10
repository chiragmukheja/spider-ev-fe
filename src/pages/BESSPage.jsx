import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import { fadeUp, staggerContainer, staggerFast, scaleUp, viewport } from "../utils/animationConfig";
import heroBg from "../assets/home/hero-bg.png";

const BESSPage = () => {
  return (
    <PageLayout>
      {/* Hero Placeholder */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="inline-block bg-secondary/20 text-secondary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Coming Soon
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white max-w-3xl leading-tight">
              Battery Energy Storage Systems
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-white/70 text-xl max-w-2xl">
              Content for this section is being prepared. Please check back soon.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is BESS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
              <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">Overview</motion.span>
              <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">What is BESS?</motion.h2>
              <motion.div variants={staggerFast} className="mt-5 space-y-3">
                {[1, 2, 3].map((i) => (
                  <motion.div key={i} variants={fadeUp} className="h-4 bg-gray-100 rounded-full animate-pulse" />
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="rounded-2xl bg-gray-50 h-64 flex items-center justify-center border-2 border-dashed border-gray-200"
            >
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🔋</div>
                <p className="text-sm">Image Placeholder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Benefits
          </motion.h2>
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div key={i} variants={scaleUp} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-xl animate-pulse mb-4" />
                <div className="h-4 bg-gray-100 rounded-full animate-pulse mb-3 w-3/4" />
                <div className="h-3 bg-gray-50 rounded-full animate-pulse" />
                <div className="h-3 bg-gray-50 rounded-full animate-pulse mt-2 w-5/6" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-3xl font-bold text-gray-900 text-center mb-12">
            Products & Solutions
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((i) => (
              <motion.div key={i} variants={scaleUp} className="rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-400">
                <div className="text-3xl mb-3">🔋</div>
                <p className="text-sm">Product {i} — Content TBD</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden py-16 text-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-4">Interested in BESS Solutions?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 mb-8">Contact us to learn more about our upcoming BESS products and solutions.</motion.p>
            <motion.a variants={fadeUp} href="/company/contact" className="inline-block bg-secondary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-secondary/90 transition-colors">
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BESSPage;
