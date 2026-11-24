import { OrderProvider } from "@/store/order";
import { AnnouncementBar, MobileOrderBar, Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { Craft } from "@/components/Craft";
import { Benefits } from "@/components/Benefits";
import { Gifting } from "@/components/Gifting";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { OrderDrawer } from "@/components/OrderDrawer";

export default function App() {
  return (
    <OrderProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-full focus:bg-espresso-900 focus:px-5 focus:py-3 focus:text-[12px] focus:font-semibold focus:text-cream-50"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <Products />
        <Craft />
        <Benefits />
        <Gifting />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileOrderBar />
      <OrderDrawer />
    </OrderProvider>
  );
}
