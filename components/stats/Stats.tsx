"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

import Card from "./Card";

import { PiFilmSlateFill } from "react-icons/pi";
import { IoMdImage } from "react-icons/io";
import { MdInsertChart } from "react-icons/md";

const Stats = () => {
  const cards = [
    { title: "دقيقة سينمائية", num: 10000, icon: PiFilmSlateFill },
    { title: "صورة احترافية", num: 12000, icon: IoMdImage  },
    { title: "حملة ترويجية ناجحة", num: 1000, icon: MdInsertChart },
  ];

  return (
    <section id="stats" className="relative">
      <div className="px-4 sm:px-5 md:px-8 lg:px-10 py-20 lg:py-40 container mx-auto">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, oklch(90.1% 0.076 70.697) 100%)",
          }}
        />

        <div className="flex flex-col space-y-2 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl w-fit mx-auto leading-[1.4] text-center min-h-32 relative">
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
            {`كل دقيقة، كل صورة، وكل حملة
هي قصة نجاح جديدة نرويها مع عملائنا.`}
          </TextEffect>
        </div>

        <AnimatedGroup
          className="grid grid-cols-3 gap-3 lg:gap-4"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                },
              },
            },
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              num={card.num}
              icon={card.icon}
              className="max-w-100"
            />
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default Stats;
