import { Instagram } from "lucide-react";
import elorraLogo from "@/assets/elorra-logo-transparent.png";

const Header = () => {
  return (
    <header className="w-full py-4 md:py-6 px-4 md:px-12 flex items-center justify-between">
      <div className="w-8 md:w-10" />
      
      <div className="flex-1 flex justify-center">
        <img 
          src={elorraLogo} 
          alt="ELORRA" 
          className="h-16 md:h-24 lg:h-28 w-auto object-contain animate-fade-in"
        />
      </div>
      
      <a 
        href="https://www.instagram.com/elorra.jewels/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 md:w-10 flex justify-end text-gold hover:text-gold-dark transition-colors duration-300"
        aria-label="Follow ELORRA on Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </header>
  );
};

export default Header;
