import { Routes, Route } from "react-router-dom";

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

      {/* Products */}
      <Route path="/products/ac-chargers" element={<ACChargersPage />} />
      <Route path="/products/dc-chargers" element={<DCChargersPage />} />
      <Route path="/products/:category/:productId" element={<ProductDetailPage />} />

      {/* Solutions */}
      <Route path="/solutions/park-and-charge" element={<ParkAndChargePage />} />
      <Route path="/solutions/community-charging" element={<CommunityChargingPage />} />
      <Route path="/solutions/public-charging" element={<PublicChargingPage />} />
      <Route path="/solutions/heavy-vehicles" element={<HeavyVehiclesPage />} />
      <Route path="/solutions/spider-connect" element={<SpiderConnectPage />} />
      <Route path="/solutions/spiderev-app" element={<SpiderEVAppPage />} />
      <Route path="/solutions/epc-works" element={<EPCWorksPage />} />

      {/* Company */}
      <Route path="/company/about" element={<AboutUsPage />} />
      <Route path="/company/contact" element={<ContactUsPage />} />

      {/* Standalone */}
      <Route path="/franchise" element={<FranchisePage />} />
      <Route path="/roi" element={<ROIPage />} />

      {/* Other */}
      <Route path="/bess" element={<BESSPage />} />
      <Route path="/har-ghar" element={<HarGharPage />} />
      <Route path="/charge-locator" element={<ChargeLocatorPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/partner-withus" element={<PartnerWithUsPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
