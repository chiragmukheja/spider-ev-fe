import HeroSvg from "../../assets/illustrations/hero-ev.svg";

const HeroIllustration = ({ className }) => {
  return (
    <img
      src={HeroSvg}
      alt="EV charging illustration"
      className={className}
      draggable={false}
    />
  );
};

export default HeroIllustration;
