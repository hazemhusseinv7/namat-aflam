import Loading from "@/components/Loading";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import PortfolioVideo from "@/components/PortfolioVideo";

import { getAboutUsData } from "@/lib/sanity/queries";

export default async function Page() {
  const data: AboutUsType | null = await getAboutUsData();

  if (!data) return <Loading id="about-us" />;

  return (
    <div className="flex max-lg:flex-col mx-auto max-w-5xl space-y-8 md:space-y-12 px-4 py-12 sm:py-24 md:py-32">
      <div className="flex flex-col gap-4 px-4">
        <h1 className="text-4xl font-medium text-nowrap">{data.title}</h1>
        {data.description && (
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
            {data.description}
          </TextEffect>
        )}
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
  );
}
