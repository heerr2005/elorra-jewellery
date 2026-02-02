import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import elorraLogo from "@/assets/elorra-logo-transparent.png";

const Header = () => {
  return (
    <motion.header 
      className="w-full py-4 md:py-6 px-4 md:px-12 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-8 md:w-10" />
      
      <motion.div 
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <img 
          src={elorraLogo} 
          alt="ELORRA" 
          className="h-20 md:h-32 lg:h-40 w-auto object-contain"
        />
      </motion.div>
      
      <motion.a 
        href="https://www.instagram.com/elorra.jewels/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 md:w-10 flex justify-end text-gold hover:text-gold-dark transition-colors duration-300"
        aria-label="Follow ELORRA on Instagram"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <Instagram className="w-5 h-5" />
      </motion.a>
    </motion.header>
  );
};

export default Header;
