import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { BrandPartners } from "@/components/brand-partners";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <BrandPartners />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
