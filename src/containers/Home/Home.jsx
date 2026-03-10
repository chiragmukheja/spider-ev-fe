import Navbar from "../../components/layout/Navbar";
import PageContainer from "../../components/layout/PageContainer";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ChargersSection from "./ChargersSection";
import ChargingSolutionsSection from "./ChargingSolutionsSection";
import BrandsSection from "./BrandsSection";
import AppSection from "./AppSection";
import NewsSection from "./NewsSection";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ChargersSection />
      <ChargingSolutionsSection />
      <BrandsSection />
      <AppSection />
      <NewsSection />
      <Footer />
    </PageContainer>
  );
};

export default Home;
