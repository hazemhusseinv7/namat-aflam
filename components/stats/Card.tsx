"use client";
import { CardContent, Card as CardWrapper } from "@/components/ui/card";
import { useEffect, useState } from "react";

import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

import { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  num: number;
  className?: string;
  icon: IconType;
}
const Card = ({ title, num, icon: Icon, className = "" }: CardProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(num);
  }, [num]);

  return (
    <CardWrapper
      className={cn(
        "group size-full mx-auto bg-gradient-to-tr from-zinc-100/40 to-zinc-50 shadow-zinc-100 max-lg:py-3",
        className
      )}
    >
      <CardContent className="flex flex-col max-lg:items-center gap-1 lg:gap-4 h-full px-2 lg:px-4">
        <div className="flex items-center gap-1">
          <Icon className="lg:hidden size-4.5 text-orange-500 group-hover:scale-120 group-hover:lg:scale-140 transition-transform duration-300" />
          <AnimatedNumber
            className="inline-flex items-center text-xl md:text-3xl lg:text-7xl font-light group-hover:font-normal text-orange-500 dark:text-zinc-50 transition-all duration-300"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={value}
          />
        </div>
        <div className="flex max-lg:flex-col items-center max-lg:justify-between max-lg:text-center h-full gap-2 lg:px-2">
          <Icon className="max-lg:hidden max-lg:order-2 size-10 text-orange-500 group-hover:scale-120 group-hover:lg:scale-140 transition-transform duration-300" />
          <span className="flex items-center max-lg:order-1 h-full font-normal text-lg md:text-2xl lg:text-3xl text-zinc-500 group-hover:mr-2 group-hover:lg:mr-4 transition-all duration-300">
            {title}
          </span>
        </div>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
