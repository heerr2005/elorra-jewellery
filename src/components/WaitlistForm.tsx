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
    <section id="waitlist" className="py-24 px-6 bg-ivory-dark/30">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold/30" />
          <Star className="w-3 h-3 text-gold" fill="currentColor" />
          <div className="w-12 h-px bg-gold/30" />
        </div>

        <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide mb-4">
          Be the First to Know
        </h2>

        <p className="text-muted-foreground font-light mb-10 max-w-sm mx-auto">
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
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter your email"
                className="elorra-input w-full"
                disabled={isLoading}
                aria-label="Email address"
              />
              {error && (
                <p className="text-sm text-destructive mt-2 text-left">{error}</p>
              )}
            </div>
            <button 
              type="submit" 
              className="elorra-button whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "..." : "Get Early Access"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
