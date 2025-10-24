import { Section } from "@/components/ui/section";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import PortfolioVideo from "@/components/PortfolioVideo";
import Loading from "@/components/Loading";

import { getPortfolioData } from "@/lib/sanity/queries";

const AboutUs = async () => {
  const data: PortfolioType | null = await getPortfolioData();

  if (!data) return <Loading id="portfolio" />;

  return (
    <Section id="portfolio" className="overflow-hidden">
      <div className="flex flex-col mx-auto max-w-5xl gap-10">
        <div className="min-h-10 text-center">
          <TextEffect
            per="word"
            preset="blur"
            delay={0.5}
            as="h2"
            className="font-semibold  text-4xl md:text-5xl"
          >
            {data.title}
          </TextEffect>
        </div>
        <div className="w-full relative">
          {data.vimeoUrl && (
            <PortfolioVideo
              vimeoUrl={data.vimeoUrl}
              vimeoTitle={data.vimeoTitle}
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
