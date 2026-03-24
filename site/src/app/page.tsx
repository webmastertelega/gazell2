"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Advantages from "@/components/sections/Advantages";
import Pricing from "@/components/sections/Pricing";
import Calculator from "@/components/sections/Calculator";
import Vehicle from "@/components/sections/Vehicle";
import Coverage from "@/components/sections/Coverage";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Pricing />
        <Calculator />
        <Vehicle />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
