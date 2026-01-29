import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandPromise from "@/components/BrandPromise";
import ComingSoon from "@/components/ComingSoon";
import WaitlistForm from "@/components/WaitlistForm";
import SocialConnect from "@/components/SocialConnect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandPromise />
        <ComingSoon />
        <WaitlistForm />
        <SocialConnect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
