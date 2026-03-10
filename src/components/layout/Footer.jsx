import { Link } from "react-router-dom";
import logo from "../../assets/home/spider-ev-logo.png";

const acProducts = [
  { label: "Spider Mini", href: "/products/ac/spider-mini" },
  { label: "Spider Lite", href: "/products/ac/spider-lite" },
  { label: "Spider Smart", href: "/products/ac/spider-smart" },
  { label: "Spider Blaze", href: "/products/ac/spider-blaze" },
  { label: "Spider Strike", href: "/products/ac/spider-strike" },
  { label: "Spider Dash", href: "/products/ac/spider-dash" },
];

const dcProducts = [
  { label: "Spider Base", href: "/products/dc/spider-base" },
  { label: "Spider Spark", href: "/products/dc/spider-spark" },
  { label: "Spider Fast", href: "/products/dc/spider-fast" },
  { label: "Spider Falcon", href: "/products/dc/spider-falcon" },
  { label: "Spider Hulk", href: "/products/dc/spider-hulk" },
  { label: "Spider Ultra", href: "/products/dc/spider-ultra" },
];

const solutions = [
  { label: "Park & Charge", href: "/solutions/park-and-charge" },
  { label: "Community Charging", href: "/solutions/community-charging" },
  { label: "Public Charging", href: "/solutions/public-charging" },
  { label: "Heavy Vehicles", href: "/solutions/heavy-vehicles" },
  { label: "CPMS (Spider Connect)", href: "/solutions/spider-connect" },
  { label: "Mobile App (SpiderEV)", href: "/solutions/spiderev-app" },
  { label: "EPC Works", href: "/solutions/epc-works" },
];

const companyLinks = [
  { label: "About Us", href: "/company/about" },
  { label: "Contact Us", href: "/company/contact" },
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
];

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        {/* Top: Logo + description + columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <img src={logo} alt="SpiderEV" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India's trusted EV charging infrastructure company — manufacturing and deploying
              AC & DC chargers across homes, businesses, and highways.
            </p>
            <div className="flex gap-3">
              {["f", "tw", "in", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-xs font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="AC Chargers" links={acProducts} />
          <FooterColumn title="DC Chargers" links={dcProducts} />
          <FooterColumn title="Solutions" links={solutions} />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <span>© {new Date().getFullYear()} SpiderEV. All rights reserved.</span>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
