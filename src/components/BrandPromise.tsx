import { Sparkles, Gem, Moon } from "lucide-react";

const promises = [
  {
    icon: Sparkles,
    title: "Curated Trendy Designs",
    description: "Handpicked pieces that blend contemporary style with timeless appeal.",
  },
  {
    icon: Gem,
    title: "Premium Finishes",
    description: "Exceptional quality and craftsmanship in every detail.",
  },
  {
    icon: Moon,
    title: "Made for Everyday Elegance",
    description: "Versatile jewellery designed to complement your daily life.",
  },
];

const BrandPromise = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-ivory-dark/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {promises.map((promise, index) => (
            <div 
              key={promise.title} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-6">
                <promise.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-xl text-foreground tracking-wide mb-3">
                {promise.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs mx-auto">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
