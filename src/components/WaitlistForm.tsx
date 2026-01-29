import { useState } from "react";
import { Star, Check } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255);

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 px-4 md:px-6 bg-ivory-dark/30">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
          <div className="w-10 md:w-12 h-px bg-gold/30" />
          <Star className="w-3 h-3 text-gold" fill="currentColor" />
          <div className="w-10 md:w-12 h-px bg-gold/30" />
        </div>

        <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground tracking-wide mb-3 md:mb-4">
          Be the First to Know
        </h2>

        <p className="text-muted-foreground text-sm font-light mb-8 md:mb-10 max-w-sm mx-auto px-4">
          Join our exclusive waitlist for early access and special offers.
        </p>

        {isSubmitted ? (
          <div className="animate-fade-in flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <p className="text-foreground font-serif text-lg tracking-wide">
              You're on the list ✨
            </p>
            <p className="text-muted-foreground text-sm font-light">
              We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto px-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email"
                  className="elorra-input w-full text-sm"
                  disabled={isLoading}
                  aria-label="Email address"
                />
              </div>
              <button 
                type="submit" 
                className="elorra-button whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-sm"
                disabled={isLoading}
              >
                {isLoading ? "..." : "Get Early Access"}
              </button>
            </div>
            {error && (
              <p className="text-sm text-destructive text-left">{error}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
