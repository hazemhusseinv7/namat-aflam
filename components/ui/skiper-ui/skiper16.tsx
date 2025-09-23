"use client";

import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";

import { IconType } from "react-icons";

import { PiFilmSlateFill, PiTimerFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";

const cards = [
  {
    title: "إخراج سينمائي",
    description: "كل لقطة مشهد، وكل مشهد حكاية",
    icon: PiFilmSlateFill,
  },
  {
    title: "إنتاج سريع وذكي",
    description: "من جلسة التصوير إلى العرض الأول",
    icon: PiTimerFill,
  },
  {
    title: "تسويق رقمي",
    description: "لا نكتفي بإخراج الفيلم… نضمن وصوله للجمهور الصحيح",
    icon: RiTeamFill,
  },
];

const StickyCard_001 = ({
  i,
  title,
  description,
  icon: Icon,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  icon: IconType;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="group rounded-4xl relative -top-1/4 flex h-[200px] w-[300px] sm:h-[300px] sm:w-[500px] lg:h-[500px] lg:w-[800px] origin-top flex-col overflow-hidden bg-gradient-to-tr from-neutral-300 to-neutral-100 text-neutral-700 px-10 py-20"
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-4xl">{title}</h3>
          <p className="text-2xl">{description}</p>
        </div>
        <Icon className="absolute bottom-10 left-10 size-72 text-neutral-700 group-hover:scale-150 group-hover:-bottom-10 group-hover:-left-10 group-hover:text-orange-400 transition-all duration-300" />
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <div
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[50vh]"
      >
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <h2 className="after:from-background after:to-foreground relative max-w-[12ch] text-4xl lg:text-8xl uppercase leading-tight opacity-70 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
            لماذا نحن
          </h2>
        </div>
        {cards.map((card, i) => {
          const targetScale = Math.max(0.5, 1 - (cards.length - i - 1) * 0.1);
          return (
            <StickyCard_001
              key={`p_${i}`}
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
  );
};

export { Skiper16, StickyCard_001 };
