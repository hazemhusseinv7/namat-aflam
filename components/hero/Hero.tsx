import Image from "next/image";
import Link from "next/link";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import SplashCursor from "@/components/hero/SplashCursor";
import HeroAnimation from "@/components/hero/HeroAnimation";
import HoverButton from "@/components/HoverButton";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <SplashCursor />
      <div>
        <div className="w-full px-8 lg:px-20 py-20 lg:py-28 absolute z-50 left-1/2 transform -translate-x-1/2 flex flex-col gap-8 justify-center items-center text-center">
          <Image
            className="w-20 lg:w-32 max-w-3/4"
            src="/logo/icon.svg"
            width={160}
            height={160}
            alt="Logo"
            priority
          />

          <div className="flex flex-col gap-2 font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
            <div className="flex flex-col gap-2 min-h-[4.5rem] lg:min-h-38">
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
      </div>

      <HeroAnimation />
    </section>
  );
};

export default Hero;
