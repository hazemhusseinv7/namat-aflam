"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

import { IconType } from "react-icons";

import { PiFilmSlateFill } from "react-icons/pi";
import { IoMdImage } from "react-icons/io";
import { MdInsertChart } from "react-icons/md";

interface StatItemProps {
  value: number;
  suffix?: string;
  description?: string;
  icon: IconType;
}

interface StatsProps {
  items?: StatItemProps[] | false;
}

const Stats = ({
  items = [
    {
      value: 10000,
      description: "دقيقة سينمائية",
      icon: PiFilmSlateFill,
    },
    {
      value: 12000,
      description: "صورة احترافية",
      icon: IoMdImage,
    },
    {
      value: 1000,
      description: "حملة ترويجية",
      icon: MdInsertChart,
    },
  ],
}: StatsProps) => {
  return (
    <Section id="stats" className="px-2">
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

      <Card className="container mx-auto max-w-[960px] px-1 border-zinc-800 shadow-2xl shadow-zinc-900">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-3 gap-2 lg:gap-10">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                    <AnimatedNumber
                      className=""
                      springOptions={{
                        bounce: 0,
                        duration: 2000,
                      }}
                      value={item.value}
                    />
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-px sm:gap-2">
                  <item.icon className="size-4.5 text-zinc-500" />

                  {item.description && (
                    <div className="text-muted-foreground text-sm font-semibold text-pretty">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </Section>
  );
};

export default Stats;
