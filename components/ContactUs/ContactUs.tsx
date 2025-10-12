import { Section } from "@/components/ui/section";
import ContactUsComponent from "@/components/ContactUs/ContactUsComponent";
import { TextEffect } from "@/components/motion-primitives/text-effect";

const ContactUs = () => {
  return (
    <Section id="contact-us">
      <div className="container mx-auto pb-20">
        <div className="flex flex-col space-y-2 mb-10 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl w-fit mx-auto leading-[1.4] text-center min-h-24 relative">
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
            {`فكرتك جاهزة…؟
             نحن نعرف كيف نرويها!`}
          </TextEffect>
        </div>

        <ContactUsComponent />
      </div>
    </Section>
  );
};

export default ContactUs;
