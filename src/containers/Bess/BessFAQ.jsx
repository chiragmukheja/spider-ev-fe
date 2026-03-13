import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../../utils/animationConfig";
import Accordion from "../../components/ui/Accordion";
import { bessFaq } from "../../data/bessFaq";

const BessFAQ = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mt-3">
            Everything you need to know about Spider BESS.
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Accordion items={bessFaq.map((f) => ({ question: f.question, answer: f.answer }))} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default BessFAQ;
