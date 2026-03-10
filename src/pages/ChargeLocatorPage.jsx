import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerFast, viewport } from "../utils/animationConfig";
import heroBg from "../assets/home/hero-bg.png";

const demoStations = [
  { id: 1, name: "SpiderEV Station — Vadodara Central", address: "Near RC Dutt Road, Vadodara, Gujarat", types: ["AC 7.4 kW", "DC 30 kW"], available: 3, total: 4, hours: "24/7" },
  { id: 2, name: "SpiderEV Station — Inorbit Mall", address: "Inorbit Mall, Vadodara, Gujarat", types: ["AC 22 kW", "DC 60 kW"], available: 2, total: 6, hours: "10 AM – 10 PM" },
  { id: 3, name: "SpiderEV Station — Highway NH48", address: "NH-48, Vadodara–Ahmedabad Expressway", types: ["DC 120 kW"], available: 1, total: 2, hours: "24/7" },
];

const ChargeLocatorPage = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedStation, setSelectedStation] = useState(null);

  const filtered = demoStations.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.address.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === "all" || s.types.some((t) => t.toLowerCase().startsWith(filterType));
    return matchSearch && matchType;
  });

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Find a Charging Station
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-3 text-white/80 text-lg"
          >
            Locate SpiderEV charging stations near you.
          </motion.p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
          {/* Search & Filters */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <motion.input
              variants={fadeUp}
              type="text"
              placeholder="Search by location or station name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-gray-200 rounded-xl px-5 py-3 text-sm outline-none focus:border-primary transition-colors bg-white shadow-sm"
            />
            <motion.select
              variants={fadeUp}
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-200 rounded-xl px-5 py-3 text-sm outline-none focus:border-primary transition-colors bg-white shadow-sm min-w-[150px]"
            >
              <option value="all">All Types</option>
              <option value="ac">AC Only</option>
              <option value="dc">DC Only</option>
            </motion.select>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Station List */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:col-span-1 space-y-4"
            >
              <h3 className="font-bold text-gray-900">{filtered.length} Station{filtered.length !== 1 ? "s" : ""} Found</h3>
              {filtered.map((s) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
                  onClick={() => setSelectedStation(s)}
                  className={`w-full text-left bg-white rounded-2xl p-5 border-2 shadow-sm hover:border-primary transition-colors ${selectedStation?.id === s.id ? "border-primary" : "border-transparent"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">{s.name}</h4>
                      <p className="text-gray-500 text-xs mt-1">{s.address}</p>
                    </div>
                    <span className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${s.available > 0 ? "bg-secondary/10 text-secondary" : "bg-red-100 text-red-600"}`}>
                      {s.available > 0 ? `${s.available} Free` : "Full"}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.types.map((t) => <span key={t} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{t}</span>)}
                  </div>
                </motion.button>
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-3xl mb-2">🔍</div>
                  <p className="text-sm">No stations found. Try a different search.</p>
                </div>
              )}
            </motion.div>

            {/* Map + Detail */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
                <div className="h-80 bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-3">🗺️</div>
                    <p className="font-medium">Google Maps Embed</p>
                    <p className="text-xs mt-1 max-w-xs">Replace with Google Maps JavaScript API embed showing all SpiderEV station pins</p>
                  </div>
                </div>
              </div>

              {selectedStation && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedStation.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{selectedStation.address}</p>
                    </div>
                    <span className={`flex-shrink-0 text-sm font-bold px-4 py-2 rounded-full ${selectedStation.available > 0 ? "bg-secondary text-white" : "bg-red-500 text-white"}`}>
                      {selectedStation.available > 0 ? `${selectedStation.available}/${selectedStation.total} Available` : "Station Full"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-xs text-gray-500 mb-1">Charger Types</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedStation.types.map((t) => <span key={t} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-xs text-gray-500 mb-1">Operating Hours</div>
                      <div className="font-semibold text-gray-900 text-sm">{selectedStation.hours}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="flex-1 text-center bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">Get Directions</a>
                    <a href="#" className="flex-1 text-center border-2 border-primary text-primary py-3 rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-colors">Open in App</a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Banner */}
      <section className="relative overflow-hidden py-12 text-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.p variants={fadeUp} className="text-white font-semibold mb-4">Download the SpiderEV app for live availability and navigation</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">Google Play</a>
              <a href="#" className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">App Store</a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ChargeLocatorPage;
