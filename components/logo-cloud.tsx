import Image from "next/image";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";

export const LogoCloud = () => {
  const logos = [
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
    "/logo/icon_alt.svg",
  ];

  return (
    <section className="pb-20 md:pb-12" dir="ltr">
      <div className="group relative m-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative py-6 w-full">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {logos.map((logo) => (
                <div key={logo} className="flex">
                  <Image
                    className="mx-auto h-5 w-fit"
                    src={logo}
                    alt="Logo"
                    height={20}
                    width={20}
                  />
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
