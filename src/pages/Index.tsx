import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <AboutSection />
    </div>
  );
};

export default Index;
