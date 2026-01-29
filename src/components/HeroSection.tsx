import { Star } from "lucide-react";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20 text-center">
      {/* Decorative star */}
      <div className="flex items-center gap-3 mb-6 md:mb-8 animate-fade-in">
        <div className="w-8 md:w-12 h-px bg-gold/30" />
        <Star className="w-3 h-3 text-gold animate-shimmer" fill="currentColor" />
        <div className="w-8 md:w-12 h-px bg-gold/30" />
      </div>

      {/* Main Headline */}
      <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide leading-tight max-w-3xl animate-fade-in px-2">
        Timeless Jewellery for
        <span className="block mt-1 md:mt-2 text-gold">Modern Elegance</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 md:mt-8 text-muted-foreground text-sm md:text-base lg:text-lg font-light tracking-wide max-w-md px-4 animate-fade-in-delay">
        A curated collection of elegant, everyday jewellery.
      </p>

      {/* CTA Button */}
      <button 
        onClick={scrollToWaitlist}
        className="elorra-button mt-8 md:mt-12 text-xs md:text-sm animate-fade-in-delay-2"
      >
        Join the Waitlist
      </button>

      {/* Decorative star */}
      <div className="flex items-center gap-3 mt-12 md:mt-16 animate-fade-in-delay-2">
        <div className="w-6 md:w-8 h-px bg-gold/20" />
        <Star className="w-2 h-2 text-gold/60" fill="currentColor" />
        <div className="w-6 md:w-8 h-px bg-gold/20" />
      </div>
    </section>
  );
};

export default HeroSection;
