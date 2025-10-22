import Image from "next/image";

import { Section } from "@/components/ui/section";
import { Tilt } from "@/components/motion-primitives/tilt";
import Loading from "@/components/Loading";

import { getServicesData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

const Services = async () => {
  const data: ServicesType | null = await getServicesData();

  if (!data) return <Loading id="services" />;

  return (
    <Section id="services" className="relative">
      <div className="flex flex-col justify-center items-center relative z-10 gap-40">
        <h2 className="after:from-background after:to-foreground relative max-w-[12ch] text-4xl lg:text-8xl uppercase leading-tight opacity-70 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          {data.title}
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {data.cards.map((service) => (
            <Tilt rotationFactor={8} isRevese key={service.title}>
              <div
                style={{
                  borderRadius: "12px",
                }}
                className="flex max-w-[400px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
              >
                <div className="size-full bg-zinc-800">
                  <Image
                    src={urlFor(service.image).width(400).height(400).url()}
                    width={400}
                    height={400}
                    alt={service.image.alt || service.title}
                    className="size-72 lg:size-100 mx-auto object-cover -mt-10 lg:-mt-20"
                  />
                </div>
                <div className="flex flex-col gap-1 px-4 pt-4 pb-5">
                  <h3 className="text-xl leading-snug text-zinc-950 dark:text-zinc-50">
                    {service.title}
                  </h3>
                  <p className="font-light text-md text-zinc-700 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
          radial-gradient(ellipse 120% 80% at 50% 50%, #ff690010, transparent 50%) 
     
        `,
        }}
      />
    </Section>
  );
};

export default Services;
