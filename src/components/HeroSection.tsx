import { Star } from "lucide-react";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Decorative star */}
      <div className="flex items-center gap-3 mb-8 animate-fade-in">
        <div className="w-12 h-px bg-gold/30" />
        <Star className="w-3 h-3 text-gold animate-shimmer" fill="currentColor" />
        <div className="w-12 h-px bg-gold/30" />
      </div>

      {/* Main Headline */}
      <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide leading-tight max-w-3xl animate-fade-in">
        Timeless Jewellery for
        <span className="block mt-2 text-gold">Modern Elegance</span>
      </h1>

      {/* Subtext */}
      <p className="mt-8 text-muted-foreground text-base md:text-lg font-light tracking-wide max-w-lg animate-fade-in-delay">
        A curated collection of elegant, everyday jewellery.
      </p>

      {/* CTA Button */}
      <button 
        onClick={scrollToWaitlist}
        className="elorra-button mt-12 animate-fade-in-delay-2"
      >
        Join the Waitlist
      </button>

      {/* Decorative star */}
      <div className="flex items-center gap-3 mt-16 animate-fade-in-delay-2">
        <div className="w-8 h-px bg-gold/20" />
        <Star className="w-2 h-2 text-gold/60" fill="currentColor" />
        <div className="w-8 h-px bg-gold/20" />
      </div>
    </section>
  );
};

export default HeroSection;
