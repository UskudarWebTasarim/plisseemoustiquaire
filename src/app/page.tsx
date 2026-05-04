import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import BrandValue from '@/components/BrandValue';
import Experience from '@/components/Experience';
import Process from '@/components/Process';
import Markets from '@/components/Markets';
import Quality from '@/components/Quality';
import Testimonials from '@/components/Testimonials';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import MobileButtons from '@/components/MobileButtons';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <BrandValue />
        <Experience />
        <Process />
        <Markets />
        <Quality />
        <Testimonials />
        <TechnicalSpecs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileButtons />
      <FloatingWhatsApp />
    </>
  );
}
