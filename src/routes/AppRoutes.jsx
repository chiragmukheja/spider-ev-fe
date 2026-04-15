import { Routes, Route, Navigate } from "react-router-dom";

// Existing
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

// Products
import ACChargersPage from "../pages/ACChargersPage";
import DCChargersPage from "../pages/DCChargersPage";
import ProductDetailPage from "../pages/ProductDetailPage";

// Solutions
import ParkAndChargePage from "../pages/solutions/ParkAndChargePage";
import CommunityChargingPage from "../pages/solutions/CommunityChargingPage";
import PublicChargingPage from "../pages/solutions/PublicChargingPage";
import HeavyVehiclesPage from "../pages/solutions/HeavyVehiclesPage";
import SpiderConnectPage from "../pages/solutions/SpiderConnectPage";
import SpiderEVAppPage from "../pages/solutions/SpiderEVAppPage";
import EPCWorksPage from "../pages/solutions/EPCWorksPage";

// Company
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

// Standalone
import FranchisePage from "../pages/FranchisePage";
import ROIPage from "../pages/ROIPage";

// Other
import BESSPage from "../pages/BESSPage";
import HarGharPage from "../pages/HarGharPage";
import ChargeLocatorPage from "../pages/ChargeLocatorPage";
import NewsPage from "../pages/NewsPage";
import BlogPage from "../pages/BlogPage";
import GalleryPage from "../pages/GalleryPage";
import PartnerWithUsPage from "../pages/PartnerWithUsPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* ── Products (new SEO URLs) ── */}
      <Route path="/electric-vehicle-ev-ac-charger" element={<ACChargersPage />} />
      <Route path="/electric-vehicle-ev-dc-charger" element={<DCChargersPage />} />
      <Route path="/products/:category/:productId" element={<ProductDetailPage />} />

      {/* ── Solutions (new SEO URLs) ── */}
      <Route path="/park-and-charge-electric-vehicle-ev-charging-station" element={<ParkAndChargePage />} />
      <Route path="/community-ev-charging-stations" element={<CommunityChargingPage />} />
      <Route path="/public-ev-charging-stations" element={<PublicChargingPage />} />
      <Route path="/heavy-duty-ev-charging-station" element={<HeavyVehiclesPage />} />
      <Route path="/cpms-ev-charging-point-management-system" element={<SpiderConnectPage />} />
      <Route path="/ev-charging-station-app" element={<SpiderEVAppPage />} />
      <Route path="/ev-charging-epc-services" element={<EPCWorksPage />} />

      {/* ── Company (new SEO URLs) ── */}
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />

      {/* ── Standalone (new SEO URLs) ── */}
      <Route path="/ev-charging-station-franchise" element={<FranchisePage />} />
      <Route path="/ev-charging-station-roi-calculator" element={<ROIPage />} />

      {/* ── Other (new SEO URLs) ── */}
      <Route path="/bess-battery-backup-for-ev-charging-stations" element={<BESSPage />} />
      <Route path="/ev-charging-station-locator" element={<ChargeLocatorPage />} />
      <Route path="/news" element={<NewsPage />} />

      {/* ── Unchanged routes ── */}
      <Route path="/har-ghar" element={<HarGharPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/partner-withus" element={<PartnerWithUsPage />} />

      {/* ── Legacy redirects (old URLs → new SEO URLs) ── */}
      <Route path="/products/ac-chargers" element={<Navigate to="/electric-vehicle-ev-ac-charger" replace />} />
      <Route path="/products/dc-chargers" element={<Navigate to="/electric-vehicle-ev-dc-charger" replace />} />
      <Route path="/solutions/park-and-charge" element={<Navigate to="/park-and-charge-electric-vehicle-ev-charging-station" replace />} />
      <Route path="/solutions/community-charging" element={<Navigate to="/community-ev-charging-stations" replace />} />
      <Route path="/solutions/public-charging" element={<Navigate to="/public-ev-charging-stations" replace />} />
      <Route path="/solutions/heavy-vehicles" element={<Navigate to="/heavy-duty-ev-charging-station" replace />} />
      <Route path="/solutions/spider-connect" element={<Navigate to="/cpms-ev-charging-point-management-system" replace />} />
      <Route path="/solutions/spiderev-app" element={<Navigate to="/ev-charging-station-app" replace />} />
      <Route path="/solutions/epc-works" element={<Navigate to="/ev-charging-epc-services" replace />} />
      <Route path="/company/about" element={<Navigate to="/about-us" replace />} />
      <Route path="/company/contact" element={<Navigate to="/contact-us" replace />} />
      <Route path="/franchise" element={<Navigate to="/ev-charging-station-franchise" replace />} />
      <Route path="/roi" element={<Navigate to="/ev-charging-station-roi-calculator" replace />} />
      <Route path="/bess" element={<Navigate to="/bess-battery-backup-for-ev-charging-stations" replace />} />
      <Route path="/charge-locator" element={<Navigate to="/ev-charging-station-locator" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
