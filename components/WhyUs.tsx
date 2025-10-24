"use client";

import React, { useRef } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";

import { Section } from "@/components/ui/section";
import Loading from "@/components/Loading";

import { urlFor } from "@/lib/sanity/image";

const WhyUs = ({ data }: { data?: WhyUsType | null }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  if (!data) return <Loading id="why-us" className="min-h-screen" />;

  const cards = data.cards;

  return (
    <Section id="why-us">
      <ReactLenis root>
        <div
          ref={container}
          className="relative flex w-full flex-col items-center justify-center pt-10 sm:pt-20 lg:pt-80 pb-80"
        >
          <div className="absolute left-1/2 top-[10%] -translate-x-1/2 content-start justify-items-center gap-6 text-center">
            <h2 className="after:from-background after:to-foreground relative max-w-[12ch] text-4xl lg:text-8xl uppercase leading-tight opacity-70 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
              {data.title}
            </h2>
          </div>
          {cards.map((card, i) => {
            const targetScale = Math.max(0.5, 1 - (cards.length - i - 1) * 0.1);
            return (
              <StickyCard
                key={i}
                i={i}
                {...card}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </ReactLenis>
    </Section>
  );
};

const StickyCard = ({
  i,
  title,
  description,
  icon,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  icon?: ImageType;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="group rounded-4xl relative -top-1/4 flex h-[200px] w-full sm:h-[300px] sm:w-[500px] lg:h-[500px] lg:w-[800px] origin-top flex-col overflow-hidden bg-gradient-to-tr from-zinc-700 to-zinc-800 text-zinc-200 px-5 py-8 lg:px-10 lg:py-20"
      >
        <div className="flex flex-col gap-2 lg:gap-4">
          <h3 className="font-medium text-2xl lg:text-4xl">{title}</h3>
          <p className="text-lg lg:text-2xl">{description}</p>
        </div>
        <div className="absolute bottom-2 left-2 lg:bottom-10 lg:left-10 size-20 lg:size-72 text-zinc-400 group-hover:scale-150 group-hover:-bottom-10 group-hover:-left-10 group-hover:text-orange-400 transition-all duration-300">
          {icon && (
            <Image
              src={urlFor(icon).width(288).height(288).url()}
              alt={icon.alt || title}
              width={288}
              height={288}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
