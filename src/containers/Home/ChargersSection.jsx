import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer } from "../../utils/animationConfig";
import acChargerImg from "../../assets/home/AcCharger.png";
import dcChargerImg from "../../assets/home/DcCharger.png";

const chargerCards = [
  {
    title: "AC Chargers",
    description:
      "Effortless, high-performance charging at home with our intelligent, secure technology, designed for any EV and providing peace of mind every day.",
    imageUrl: acChargerImg,
    href: "/products/ac-chargers",
  },
  {
    title: "DC Chargers",
    description:
      "Deliver exceptional power and energy efficiency, fueling rapid charging that drives personal EVs and heavy-duty vehicles further.",
    imageUrl: dcChargerImg,
    href: "/products/dc-chargers",
  },
];

const ChargersSection = () => {
  return (
    <section className="w-full bg-[#F3F5F8] py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8 "
        >
          {chargerCards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              className="text-center hover:shadow-lg pb-12 rounded-3xl"
            >
              <div className="overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-8 text-lg sm:text-xl lg:text-2xl leading-tight font-semibold text-secondary">
                {card.title}
              </h3>

              <p className="mt-2 max-w-[500px] mx-auto text-[#9AA5B6] text-sm sm:text-sm lg:text-md leading-[1.45] font-medium">
                {card.description}
              </p>

              <Link
                to={card.href}
                className="mt-2 inline-block text-[#202735] text-sm sm:text-md lg:text-lg font-semibold underline underline-offset-4 hover:text-black transition-colors"
              >
                know more
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChargersSection;
