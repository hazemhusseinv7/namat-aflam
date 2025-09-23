import Hero from "@/components/hero/Hero";
import Stats from "@/components/stats/Stats";
import AboutUs from "@/components/AboutUs";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutUs />
      <WhyUs />
      <Portfolio />
      <ContactUs />
    </>
  );
}
