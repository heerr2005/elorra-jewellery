import { Star } from "lucide-react";

const ComingSoon = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-px bg-gold/30" />
        <Star className="w-3 h-3 text-gold animate-shimmer" fill="currentColor" />
        <div className="w-16 h-px bg-gold/30" />
      </div>

      <h2 className="font-serif text-2xl md:text-4xl text-foreground tracking-wide">
        Coming Soon
      </h2>

      <p className="mt-6 text-muted-foreground font-light tracking-wide max-w-md mx-auto">
        We're putting the final touches on something beautiful.
      </p>

      <div className="flex items-center justify-center gap-4 mt-10">
        <div className="w-8 h-px bg-gold/20" />
        <Star className="w-2 h-2 text-gold/50" fill="currentColor" />
        <div className="w-8 h-px bg-gold/20" />
      </div>
    </section>
  );
};

export default ComingSoon;
