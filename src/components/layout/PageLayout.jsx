import Navbar from "./Navbar";
import Footer from "./Footer";
import PageContainer from "./PageContainer";
import WhatsAppFloat from "../ui/WhatsAppFloat";

const PageLayout = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </PageContainer>
  );
};

export default PageLayout;
