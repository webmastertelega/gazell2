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
import { getConfigServer } from "@/config/getConfig";

export default function Home() {
  const config = getConfigServer();

  return (
    <>
      <Header logo={config.logo} contacts={config.contacts} />
      <main>
        <Hero contacts={config.contacts} logo={config.logo} />
        <Services services={config.services} />
        <Advantages />
        <Pricing pricing={config.pricing} />
        <Calculator />
        <Vehicle vehicle={config.vehicle} />
        <Coverage coverage={config.coverage} />
        <FAQ faq={config.faq} />
        <Contact contacts={config.contacts} />
      </main>
      <Footer contacts={config.contacts} logo={config.logo} />
      <FloatingButtons contacts={config.contacts} />
    </>
  );
}
