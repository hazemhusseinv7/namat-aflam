"use client";

import { useState } from "react";

import { Spinner } from "@heroui/spinner";

import { TextEffect } from "@/components/motion-primitives/text-effect";

export default function Page() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const vimeoUrl = process.env.NEXT_PUBLIC_VIMEO_URL;
  const vimeoId = vimeoUrl?.split("/").pop();
  const vimeoTitle = process.env.NEXT_PUBLIC_VIMEO_TITLE;

  return (
    <div className="flex max-lg:flex-col mx-auto max-w-5xl space-y-8 md:space-y-12 px-4 py-12 sm:py-24 md:py-32">
      <div className="flex flex-col gap-4 px-4">
        <h1 className="text-4xl font-medium">من نحن</h1>

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
          {`في كل علامة تجارية قصة لم تُروى بعد
              في نمط أفلام نحن الكاميرا التي تكشف تفاصيلها والعدسة التي تضعها في قلب المشهد
              نصنع مقاطع ترويجية وصورًا تُشبه الأفلام تترك أثرًا طويلًا على المتلقي`}
        </TextEffect>
      </div>

      <div className="w-full relative">
        {vimeoId && (
          <div>
            {/* Loading state */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner className="text-orange-400" />
              </div>
            )}

            {/* Vimeo Iframe */}
            <iframe
              title={vimeoTitle}
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=1&title=0&byline=0&portrait=0&muted=1`}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              onLoad={() => setIsVideoLoaded(true)}
              className="w-auto h-full min-h-[532.8px] mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
