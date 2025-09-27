"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Skiper54 = () => {
  const images = [
    {
      src: "/portfolio/img-1.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-2.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-3.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-4.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-5.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-1.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-2.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-3.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-4.webp",
      alt: "Image",
      title: "Image",
    },
    {
      src: "/portfolio/img-5.webp",
      alt: "Image",
      title: "Image",
    },
  ];
  return (
    <div className="flex flex-col gap-20 h-full w-screen items-center justify-center overflow-hidden bg-background py-40">
      <h2 className="after:from-background after:to-foreground relative max-w-[12ch] text-4xl lg:text-8xl uppercase leading-tight opacity-70 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
        أعمالنا
      </h2>
      <Carousel_006
        images={images}
        className=""
        loop={true}
        showNavigation={true}
        showPagination={true}
      />
    </div>
  );
};

interface Carousel_006Props {
  images: { src: string; alt: string; title: string }[];
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
}

const Carousel_006 = ({
  images,
  className,
  autoplay = false,
  loop = true,
  showNavigation = true,
  showPagination = true,
}: Carousel_006Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("w-full", className)}
      opts={{
        loop,
        slidesToScroll: 1,
      }}
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]
          : []
      }
    >
      <CarouselContent className="flex h-[500px] w-full">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="relative flex h-[81.5%] w-full basis-[73%] items-center justify-center sm:basis-[50%] md:basis-[30%] lg:basis-[25%] xl:basis-[21%]"
          >
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  current !== index
                    ? "inset(15% 0 15% 0 round 2rem)"
                    : "inset(0 0 0 0 round 2rem)",
              }}
              className="h-full w-full overflow-hidden rounded-3xl"
            >
              <div className="relative h-full w-full border">
                <Image
                  src={img.src}
                  width={500}
                  height={300}
                  alt={img.alt}
                  className="h-full w-full scale-105 object-cover"
                />
              </div>
            </motion.div>
            {/* <AnimatePresence mode="wait">
              {current === index && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-2 flex h-[14%] w-full translate-y-full items-center justify-center p-2 text-center font-medium tracking-tight text-black/20"
                >
                  {img.title}
                </motion.div>
              )}
            </AnimatePresence> */}
          </CarouselItem>
        ))}
      </CarouselContent>

      {showNavigation && (
        <div className="absolute -bottom-4 right-1/2 translate-x-1/2 flex w-full items-center justify-between gap-2 px-4 max-w-[98%] lg:max-w-[95%]">
          <button
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()}
            className="rounded-full p-2 bg-black/10 hover:bg-black/30 transition-colors duration-300 cursor-pointer"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => api?.scrollNext()}
            className="rounded-full p-2 bg-black/10 hover:bg-black/30 transition-colors duration-300 cursor-pointer"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      )}

      {showPagination && (
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: images.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 w-2 cursor-pointer rounded-full transition-all",
                  current === index ? "bg-black" : "bg-[#D9D9D9]"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </Carousel>
  );
};

export { Skiper54 };
