import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { HeroBanner } from "@/components/hero/HeroBanner";
import { ProductSection } from "@/components/product/ProductSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}
