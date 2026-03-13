import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animationConfig";
import heroBg from "../../assets/home/hero-bg.png";

const BessHero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block bg-secondary/20 text-secondary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Battery Energy Storage Systems
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
          >
            Power Your World,{" "}
            <span className="text-secondary">Even When the Grid Can't</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/80 text-lg max-w-2xl leading-relaxed"
          >
            Reliable backup power, seamless solar integration, and smart energy
            management — for homes and businesses across India.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("bess-products")}
              className="bg-secondary text-white px-7 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollTo("bess-enquiry")}
              className="border-2 border-white text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Enquire Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BessHero;
