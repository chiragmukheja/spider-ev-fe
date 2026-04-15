import { Helmet } from "react-helmet-async";
import Home from "../containers/Home/Home";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Electric Vehicle Charging Station in Telangana & Andhra Pradesh</title>
        <meta name="description" content="Spider Energy is a Trusted EV Charging Company in Andhra Pradesh (AP) & Telangana (TG), Offering Fast and Reliable EV Charging Solutions for a Sustainable Future." />
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
