import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import BessHero from "../containers/Bess/BessHero";
import BessIntro from "../containers/Bess/BessIntro";
import BessPillars from "../containers/Bess/BessPillars";
import BessCapacitySelector from "../containers/Bess/BessCapacitySelector";
import BessProductTabs from "../containers/Bess/BessProductTabs";
import BessSpecsTabs from "../containers/Bess/BessSpecsTabs";
import BessComparison from "../containers/Bess/BessComparison";
import BessFeatures from "../containers/Bess/BessFeatures";
import BessAppSection from "../containers/Bess/BessAppSection";
import BessFAQ from "../containers/Bess/BessFAQ";
import BessEnquiry from "../containers/Bess/BessEnquiry";

const BESSPage = () => {
  const [activeSpecProduct, setActiveSpecProduct] = useState("spidervault-3");

  const handleProductSelect = (productId) => {
    setActiveSpecProduct(productId);
    setTimeout(() => {
      document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <PageLayout>
      <BessHero />
      <BessIntro />
      <BessPillars />
      <BessCapacitySelector onProductSelect={handleProductSelect} />
      <BessProductTabs onProductSelect={handleProductSelect} />
      <BessSpecsTabs activeProduct={activeSpecProduct} onTabChange={setActiveSpecProduct} />
      <BessComparison />
      <BessFeatures />
      <BessAppSection />
      <BessFAQ />
      <BessEnquiry />
    </PageLayout>
  );
};

export default BESSPage;
