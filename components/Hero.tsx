import Image from "next/image";
import Link from "next/link";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import HoverButton from "@/components/HoverButton";
import LightRays from "@/components/LightRays";
import { LogoCloud } from "@/components/logo-cloud";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between relative w-full min-h-screen overflow-hidden bg-foreground-100/10">
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

      <div className="z-100 w-full px-8 lg:px-20 pt-40 lg:pt-56 flex flex-col gap-8 justify-center items-center text-center">
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
            <TextEffect per="word" preset="blur" delay={0.5} as="h1">
              أعمال تناسب منتجك
            </TextEffect>
            <TextEffect per="word" preset="blur" delay={1.5}>
              وحملات تُحدث الأثر
            </TextEffect>
          </div>

          <HoverButton
            content="أعمالنا"
            className="mx-auto mt-4"
            as={Link}
            href="/#portfolio"
          />
        </div>
      </div>

      <LogoCloud />
    </section>
  );
};

export default Hero;
