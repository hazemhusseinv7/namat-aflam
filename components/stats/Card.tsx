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
        "group w-full h-auto mx-auto bg-gradient-to-tr from-zinc-100/40 to-zinc-50 shadow-zinc-100",
        className
      )}
    >
      <CardContent className="flex flex-col gap-4 px-4">
        <AnimatedNumber
          className="inline-flex items-center text-3xl lg:text-7xl font-light group-hover:font-normal text-orange-500 dark:text-zinc-50 transition-all duration-300"
          springOptions={{
            bounce: 0,
            duration: 2000,
          }}
          value={value}
        />
        <div className="flex items-center gap-2 lg:px-2">
          <Icon className="size-8 text-orange-500 group-hover:scale-120 group-hover:lg:scale-140 transition-transform duration-300" />
          <span className="font-normal text-2xl lg:text-3xl text-zinc-500 group-hover:mr-2 group-hover:lg:mr-4 transition-all duration-300">
            {title}
          </span>
        </div>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
