import Image from "next/image";

import { TextEffect } from "@/components/motion-primitives/text-effect";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import Loading from "@/components/Loading";

import { getStatsData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

import { FaPlus } from "react-icons/fa6";

const Stats = async () => {
  const data: StatsType | null = await getStatsData();

  if (!data) return <Loading id="stats" className="min-h-screen" />;

  return (
    <Section id="stats" className="px-2">
      <div className="flex flex-col space-y-2 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl w-fit mx-auto leading-[1.4] text-center min-h-32 relative">
        {data.title && (
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
            {data.title}
          </TextEffect>
        )}
      </div>

      <Card className="container mx-auto max-w-[960px] px-1 border-zinc-800 shadow-2xl shadow-zinc-900">
        <div className="grid grid-cols-3 gap-2 lg:gap-10">
          {data.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="flex items-baseline gap-1">
                <FaPlus />
                <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                  <AnimatedNumber
                    springOptions={{
                      bounce: 0,
                      duration: 2000,
                    }}
                    value={item.value}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                {item.icon && (
                  <Image
                    src={urlFor(item.icon).width(24).height(24).url()}
                    alt={item.icon.alt || item.description || "Icon"}
                    width={18}
                    height={18}
                    className="size-4.5"
                  />
                )}

                <div className="text-muted-foreground text-sm font-semibold text-nowrap">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default Stats;
