import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import BessHero from "../containers/Bess/BessHero";
import BessIntro from "../containers/Bess/BessIntro";
import BessPillars from "../containers/Bess/BessPillars";
import BessProductCards from "../containers/Bess/BessProductCards";
import BessSpecsTabs from "../containers/Bess/BessSpecsTabs";
import BessFeatures from "../containers/Bess/BessFeatures";
import BessAppSection from "../containers/Bess/BessAppSection";
import BessFAQ from "../containers/Bess/BessFAQ";
import BessEnquiry from "../containers/Bess/BessEnquiry";

const BESSPage = () => {
  const [activeProduct, setActiveProduct] = useState("bess-3");

  const handleProductSelect = (id) => {
    setActiveProduct(id);
    setTimeout(() => {
      document.getElementById("bess-specs")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <PageLayout>
      <BessHero />
      <BessIntro />
      <BessPillars />
      <BessProductCards
        activeProduct={activeProduct}
        onProductSelect={handleProductSelect}
      />
      <BessSpecsTabs
        activeProduct={activeProduct}
        onTabChange={setActiveProduct}
      />
      <BessFeatures />
      <BessAppSection />
      <BessFAQ />
      <BessEnquiry />
    </PageLayout>
  );
};

export default BESSPage;
