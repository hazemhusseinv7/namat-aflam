"use client";

import { useState } from "react";

import { Spinner } from "@heroui/spinner";

import { Section } from "@/components/ui/section";
import { TextEffect } from "@/components/motion-primitives/text-effect";

const AboutUs = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const vimeoUrl = process.env.NEXT_PUBLIC_VIMEO_URL;
  const vimeoId = vimeoUrl?.split("/").pop();
  const vimeoTitle = process.env.NEXT_PUBLIC_VIMEO_TITLE;

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
            مجموعة الأعمال
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
                src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=1&title=0&byline=0&portrait=0`}
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
    </Section>
  );
};

export default AboutUs;
