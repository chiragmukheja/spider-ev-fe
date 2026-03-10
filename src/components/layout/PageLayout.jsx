import Navbar from "./Navbar";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

const PageLayout = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </PageContainer>
  );
};

export default PageLayout;
