import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <AboutUs />
      <WhyUs />
      <Services />
      <ContactUs />
      <Cta />
    </main>
  );
}
