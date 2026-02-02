import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="py-10 md:py-12 px-4 md:px-6 text-center border-t border-gold/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-8 h-px bg-gold/20" />
        <Star className="w-2 h-2 text-gold/40" fill="currentColor" />
        <div className="w-8 h-px bg-gold/20" />
      </div>

      <motion.p 
        className="font-serif text-gold text-lg md:text-xl tracking-ultra-wide mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ELORRA
      </motion.p>

      <p className="text-muted-foreground text-xs font-light tracking-wide">
        © ELORRA 2026. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
