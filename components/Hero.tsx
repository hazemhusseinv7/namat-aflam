import Image from "next/image";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import HoverButton from "@/components/HoverButton";
import LightRays from "@/components/LightRays";
import { LogoCloud } from "@/components/logo-cloud";
import Loading from "@/components/Loading";

import { getHeroData, getContactUsData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

const Hero = async () => {
  const data: HeroType | null = await getHeroData();
  const description: ContactUsType | null = await getContactUsData();

  if (!data) return <Loading id="hero" />;

  const logos =
    data.clientLogos?.map((clientLogo) => ({
      url: urlFor(clientLogo.logo).width(100).height(50).url(),
      companyName: clientLogo.companyName,
      alt: clientLogo.alt,
    })) || [];

  const title = data.title?.split("\n") || [];

  return (
    <section className="-mt-16 flex flex-col justify-between relative w-full min-h-screen overflow-hidden bg-foreground-100/10">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays absolute top-0 left-0"
      />

      <div className="z-50 w-full px-8 lg:px-20 pt-40 lg:pt-56 flex flex-col gap-8 justify-center items-center text-center">
        <Image
          className="w-40 lg:w-100 max-w-3/4"
          src="/logo/logo_colored.svg"
          width={160}
          height={160}
          alt="Logo"
          priority
          fetchPriority="high"
        />

        <div className="flex flex-col gap-2 font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
          <div className="flex flex-col gap-2 min-h-[4.5rem] lg:min-h-38 lg:leading-[1.2]">
            {title.map((line, i) => (
              <TextEffect
                key={i}
                per="word"
                preset="blur"
                delay={0.5 + i * 1}
                as={i === 0 ? "h1" : "div"}
              >
                {line}
              </TextEffect>
            ))}
          </div>

          <HoverButton
            content={data.button}
            className="mx-auto mt-4"
            data={description}
          />
        </div>
      </div>

      <LogoCloud logos={logos} />
    </section>
  );
};

export default Hero;
