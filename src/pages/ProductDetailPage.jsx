import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import AppDownloadCTA from "../components/ui/AppDownloadCTA";
import { fadeUp, fadeLeft, fadeRight, scaleUp, staggerContainer, staggerFast, viewport } from "../utils/animationConfig";
import acImg from "../assets/home/AcCharger.png";
import dcImg from "../assets/home/DcCharger.png";
import heroBg from "../assets/home/hero-bg.png";

const productData = {
  ac: {
    "spider-mini": {
      name: "Spider Mini", tagline: "Compact and reliable home charging for 2 & 3 wheelers",
      power: "3.3 kW", connector: "Bharat AC-001 / Type 1", inputVoltage: "230V AC, Single Phase",
      outputCurrent: "16A", ipRating: "IP54", certifications: "BIS Certified", ocpp: "Not Applicable",
      features: ["Plug & Play", "Compact Design", "LED Status Indicator", "Overload Protection", "Short Circuit Protection", "Thermal Protection"],
      compatible: ["2 Wheelers", "3 Wheelers"],
    },
    "spider-lite": {
      name: "Spider Lite", tagline: "Maximum functionality meets aesthetic design",
      power: "3.3 kW", connector: "Bharat AC-001 / Type 1", inputVoltage: "230V AC, Single Phase",
      outputCurrent: "16A", ipRating: "IP54", certifications: "BIS Certified", ocpp: "OCPP 1.6J",
      features: ["Smart Connectivity", "RFID Auth", "LCD Display", "Energy Metering", "Overload Protection", "Remote Monitoring"],
      compatible: ["2 Wheelers", "3 Wheelers"],
    },
    "spider-smart": {
      name: "Spider Smart", tagline: "Smart home charging for 4-wheelers",
      power: "7.4 kW", connector: "Type 2 (IEC 62196)", inputVoltage: "230V AC, Single Phase",
      outputCurrent: "32A", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 1.6J",
      features: ["Smart App Control", "RFID Auth", "Energy Metering", "Dynamic Load Management", "Overload Protection", "Remote Monitoring"],
      compatible: ["4 Wheelers"],
    },
    "spider-blaze": {
      name: "Spider Blaze", tagline: "High-power AC charging for fleets and commercial spaces",
      power: "22 kW", connector: "Type 2 (IEC 62196)", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "32A", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 1.6J / 2.0",
      features: ["Three-Phase Charging", "RFID Auth", "Energy Metering", "Load Balancing", "Remote Management", "Fleet Ready"],
      compatible: ["4 Wheelers", "Bus", "Truck"],
    },
    "spider-strike": {
      name: "Spider Strike", tagline: "High-power AC solution for commercial fleets",
      power: "40 kW", connector: "Type 2 (IEC 62196)", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "63A", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 1.6J / 2.0",
      features: ["High Power Output", "RFID Auth", "Dynamic Load Management", "Remote Monitoring", "Fleet Management", "Payment Integration"],
      compatible: ["4 Wheelers", "Bus", "Truck"],
    },
    "spider-dash": {
      name: "Spider Dash", tagline: "Ultra-high power AC charging for heavy commercial vehicles",
      power: "80 kW", connector: "Type 2 (IEC 62196)", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "125A", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 2.0",
      features: ["Ultra High Power", "Multi-Gun Support", "Advanced Load Management", "Remote Diagnostics", "Fleet Ready", "Payment Integration"],
      compatible: ["4 Wheelers", "Bus", "Truck"],
    },
  },
  dc: {
    "spider-base": {
      name: "Spider Base", tagline: "Entry-level DC fast charger for 2 & 3 wheelers",
      power: "3–12 kW", connector: "Bharat DC-001", inputVoltage: "230V AC / 415V AC",
      outputCurrent: "Up to 50A DC", ipRating: "IP54", certifications: "BIS Certified", ocpp: "OCPP 1.6J",
      features: ["DC Fast Charging", "RFID Auth", "LED Indicator", "Auto-Cutoff", "Overload Protection", "Remote Monitoring"],
      compatible: ["2 Wheelers", "3 Wheelers"],
    },
    "spider-spark": {
      name: "Spider Spark", tagline: "Reliable DC fast charging for personal EVs",
      power: "15 kW", connector: "CCS2 / CHAdeMO", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "Up to 37.5A DC", ipRating: "IP54", certifications: "BIS, CE Certified", ocpp: "OCPP 1.6J",
      features: ["DC Fast Charging", "Dual Connector", "RFID Auth", "Touch Screen", "Energy Metering", "Remote Management"],
      compatible: ["4 Wheelers"],
    },
    "spider-fast": {
      name: "Spider Fast", tagline: "30 kW rapid charging for commercial locations",
      power: "30 kW", connector: "CCS2 / CHAdeMO", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "Up to 75A DC", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 1.6J / 2.0",
      features: ["Rapid Charging", "Dual Gun", "RFID / App Auth", "7-inch Display", "Payment Gateway", "Remote Monitoring"],
      compatible: ["4 Wheelers"],
    },
    "spider-falcon": {
      name: "Spider Falcon", tagline: "High-speed 60 kW DC charging for public networks",
      power: "60 kW", connector: "CCS2 / CHAdeMO", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "Up to 150A DC", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 2.0",
      features: ["High Power DC", "Multi-Standard Connectors", "7-inch Touch Display", "Payment Integration", "Dynamic Load Management", "Remote Diagnostics"],
      compatible: ["4 Wheelers"],
    },
    "spider-hulk": {
      name: "Spider Hulk", tagline: "120 kW powerhouse for fleets and highways",
      power: "120 kW", connector: "CCS2 (Dual Gun)", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "Up to 300A DC", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 2.0",
      features: ["120 kW Power", "Dual Gun Simultaneous", "10-inch Display", "Fleet Management", "Payment Gateway", "Remote Diagnostics"],
      compatible: ["4 Wheelers", "Bus", "Truck"],
    },
    "spider-ultra": {
      name: "Spider Ultra", tagline: "240 kW ultra-rapid charger — India's most powerful",
      power: "240 kW", connector: "CCS2 (Multi-Gun)", inputVoltage: "415V AC, Three Phase",
      outputCurrent: "Up to 600A DC", ipRating: "IP55", certifications: "BIS, CE Certified", ocpp: "OCPP 2.0",
      features: ["240 kW Ultra Power", "Multi-Gun 4 Outputs", "15-inch Display", "Fleet & Depot Ready", "Advanced Load Balancing", "SCADA Integration"],
      compatible: ["4 Wheelers", "Bus", "Truck"],
    },
  },
};

const specRows = (product) => [
  ["Power Output", product.power],
  ["Connector Type", product.connector],
  ["Input Voltage", product.inputVoltage],
  ["Output Current", product.outputCurrent],
  ["Protection Rating", product.ipRating],
  ["Certifications", product.certifications],
  ["OCPP Version", product.ocpp],
];

const ProductDetailPage = () => {
  const { category, productId } = useParams();
  const catData = productData[category];
  const product = catData ? catData[productId] : null;
  const productImg = category === "ac" ? acImg : dcImg;

  if (!product) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to={`/products/${category === "ac" ? "ac-chargers" : "dc-chargers"}`} className="bg-primary text-white px-6 py-3 rounded-xl font-semibold">
            Back to {category === "ac" ? "AC" : "DC"} Chargers
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider">
                {category === "ac" ? "AC Charger" : "DC Fast Charger"}
              </motion.span>
              <motion.h1 variants={fadeUp} className="mt-3 text-4xl sm:text-5xl font-bold text-white">
                {product.name}
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-4 text-white/80 text-xl">{product.tagline}</motion.p>
              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">{product.power}</span>
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">{product.ocpp}</span>
              </motion.div>
              <motion.button variants={fadeUp} className="mt-8 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Download Datasheet (PDF)
              </motion.button>
            </motion.div>
            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              <div className="bg-white/10 rounded-2xl p-10">
                <img src={productImg} alt={product.name} className="h-64 object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs + Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specs */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</motion.h2>
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                {specRows(product).map(([label, value], i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className={`flex ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <div className="w-44 px-5 py-3.5 text-sm font-semibold text-gray-600 border-r border-gray-100 flex-shrink-0">{label}</div>
                    <div className="px-5 py-3.5 text-sm text-gray-900">{value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Key Features
              </motion.h2>
              <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="grid grid-cols-2 gap-4"
              >
                {product.features.map((feature) => (
                  <motion.div
                    key={feature}
                    variants={scaleUp}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-800">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="text-2xl font-bold text-gray-900 mt-10 mb-4"
              >
                Compatible Vehicles
              </motion.h2>
              <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex flex-wrap gap-3"
              >
                {product.compatible.map((v) => (
                  <motion.span
                    key={v}
                    variants={scaleUp}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {v}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-10 bg-gray-50 text-center"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to={`/products/${category === "ac" ? "ac-chargers" : "dc-chargers"}`}
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            ← View All {category === "ac" ? "AC" : "DC"} Chargers
          </Link>
        </div>
      </motion.section>

      <AppDownloadCTA />
    </PageLayout>
  );
};

export default ProductDetailPage;
