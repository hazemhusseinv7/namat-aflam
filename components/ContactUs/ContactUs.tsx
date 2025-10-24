import { Section } from "@/components/ui/section";
import ContactUsComponent from "@/components/ContactUs/ContactUsComponent";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import Loading from "@/components/Loading";

import { getContactUsData } from "@/lib/sanity/queries";

const ContactUs = async () => {
  const data: ContactUsType | null = await getContactUsData();

  if (!data) return <Loading id="contact-us" className="min-h-screen" />;

  return (
    <Section id="contact-us">
      <div className="container mx-auto pb-20">
        <div className="flex flex-col space-y-2 mb-10 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl w-fit mx-auto leading-[1.4] text-center min-h-24 relative">
          {data.description && (
            <TextEffect
              per="line"
              as="h2"
              segmentWrapperClassName="overflow-hidden block"
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  },
                },
              }}
            >
              {data.description}
            </TextEffect>
          )}
        </div>

        <ContactUsComponent />
      </div>
    </Section>
  );
};

export default ContactUs;
