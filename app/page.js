import Image from "next/image";
import HomeHeroSection from "./components/HomeHeroSection";
import ProductShowcase from "./components/ProductCarousel";
import SurfVideoSection from "./components/SurfVideoSection";
import Footer from "./components/Footer";
import ReversedProductCarousel from "./components/ReversedProductCarousel";
import WetsuitsHighlightSection from "./components/WetsuitsHighlightSection";

export default function Home() {
  return (
    <div className="">
    <HomeHeroSection/>
    <ProductShowcase/>
    <SurfVideoSection/>
    <ReversedProductCarousel/>
    <WetsuitsHighlightSection/>
    <Footer/>
    </div>
  );
}
