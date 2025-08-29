import DownloadAppSection from "@/components/home/DownloadAppSection";
import FoodHeroSection from "@/components/home/FoodHeroSection";
import FooterSection from "@/components/home/FooterSection";
import HeroSection from "@/components/home/HeroSection";
import MintaGoldBanner from "@/components/home/MintaGoldBanner";
import ServicesSection from "@/components/home/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FoodHeroSection />
      <MintaGoldBanner />
      <ServicesSection />
      <DownloadAppSection />
      <FooterSection />
    </div>
  );
}
