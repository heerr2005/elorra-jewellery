import { Instagram } from "lucide-react";

const SocialConnect = () => {
  return (
    <section className="py-20 px-6 text-center">
      <p className="text-muted-foreground text-sm tracking-wide mb-6 font-light">
        Follow our journey on Instagram
      </p>

      <a
        href="https://instagram.com/elorra.jewels"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-gold hover:text-gold-dark transition-colors duration-300 group"
      >
        <Instagram className="w-5 h-5" />
        <span className="font-serif text-lg tracking-wide group-hover:underline underline-offset-4">
          @elorra.jewels
        </span>
      </a>
    </section>
  );
};

export default SocialConnect;
