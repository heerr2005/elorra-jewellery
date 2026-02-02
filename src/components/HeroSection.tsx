import { Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20 text-center">
      {/* Decorative star */}
      <motion.div 
        className="flex items-center gap-3 mb-6 md:mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-8 md:w-12 h-px bg-gold/30" />
        <Star className="w-3 h-3 text-gold animate-shimmer" fill="currentColor" />
        <div className="w-8 md:w-12 h-px bg-gold/30" />
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide leading-tight max-w-3xl px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
      >
        Timeless Jewellery for
        <motion.span 
          className="block mt-1 md:mt-2 text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Modern Elegance
        </motion.span>
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        className="mt-6 md:mt-8 text-muted-foreground text-sm md:text-base lg:text-lg font-light tracking-wide max-w-md px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        A curated collection of elegant, everyday jewellery.
      </motion.p>

      {/* CTA Button */}
      <motion.button 
        onClick={scrollToWaitlist}
        className="elorra-button mt-8 md:mt-12 text-xs md:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Join the Waitlist
      </motion.button>

      {/* Decorative star */}
      <motion.div 
        className="flex items-center gap-3 mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="w-6 md:w-8 h-px bg-gold/20" />
        <Star className="w-2 h-2 text-gold/60" fill="currentColor" />
        <div className="w-6 md:w-8 h-px bg-gold/20" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
