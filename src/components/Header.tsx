import { Instagram } from "lucide-react";
import elorraLogo from "@/assets/elorra-logo-final.png";

const Header = () => {
  return (
    <header className="w-full px-4 md:px-12 py-6 md:py-8">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <div />

        <div className="flex justify-center">
          <img
            src={elorraLogo}
            alt="ELORRA logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain animate-fade-in"
          />
        </div>

        <div className="flex justify-end">
          <a
            href="https://www.instagram.com/elorra.jewels/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 text-gold hover:text-gold-dark transition-colors duration-300"
            aria-label="Follow ELORRA on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
