import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import Cta from "@/components/Cta";

import { getWhyUsData, getContactUsData } from "@/lib/sanity/queries";

export default async function Home() {
  const whyUsData: WhyUsType | null = await getWhyUsData();
  const ContactUsData: ContactUsType | null = await getContactUsData();

  return (
    <main>
      <Hero />
      <Stats />
      <AboutUs />
      <WhyUs data={whyUsData} />
      <Services />
      <ContactUs />
      <Cta data={ContactUsData} />
    </main>
  );
}
