import { Star } from "lucide-react";

const ComingSoon = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 text-center">
      <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
        <div className="w-12 md:w-16 h-px bg-gold/30" />
        <Star className="w-3 h-3 text-gold animate-shimmer" fill="currentColor" />
        <div className="w-12 md:w-16 h-px bg-gold/30" />
      </div>

      <h2 className="font-serif text-xl md:text-2xl lg:text-4xl text-foreground tracking-wide">
        Coming Soon
      </h2>

      <p className="mt-4 md:mt-6 text-muted-foreground text-sm md:text-base font-light tracking-wide max-w-md mx-auto px-4">
        We're putting the final touches on something beautiful.
      </p>

      <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
        <div className="w-6 md:w-8 h-px bg-gold/20" />
        <Star className="w-2 h-2 text-gold/50" fill="currentColor" />
        <div className="w-6 md:w-8 h-px bg-gold/20" />
      </div>
    </section>
  );
};

export default ComingSoon;
