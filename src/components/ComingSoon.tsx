import { Star } from "lucide-react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 px-4 md:px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center justify-center gap-4 mb-6 md:mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-12 md:w-16 h-px bg-gold/30" />
        <Star className="w-3 h-3 text-gold animate-shimmer" fill="currentColor" />
        <div className="w-12 md:w-16 h-px bg-gold/30" />
      </motion.div>

      <motion.h2 
        className="font-serif text-xl md:text-2xl lg:text-4xl text-foreground tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Coming Soon
      </motion.h2>

      <motion.p 
        className="mt-4 md:mt-6 text-muted-foreground text-sm md:text-base font-light tracking-wide max-w-md mx-auto px-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        We're putting the final touches on something beautiful.
      </motion.p>

      <motion.div 
        className="flex items-center justify-center gap-4 mt-8 md:mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="w-6 md:w-8 h-px bg-gold/20" />
        <Star className="w-2 h-2 text-gold/50" fill="currentColor" />
        <div className="w-6 md:w-8 h-px bg-gold/20" />
      </motion.div>
    </motion.section>
  );
};

export default ComingSoon;
