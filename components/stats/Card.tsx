"use client";

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
    <div
      className={cn(
        "flex flex-col gap-4 w-full h-auto mx-auto border bg-gradient-to-tr from-zinc-100/40 to-zinc-50 border-zinc-200 shadow-2xl shadow-zinc-100 px-4 py-8 rounded-xl",
        className
      )}
    >
      <AnimatedNumber
        className="inline-flex items-center text-2xl lg:text-7xl font-light text-orange-500 dark:text-zinc-50"
        springOptions={{
          bounce: 0,
          duration: 2000,
        }}
        value={value}
      />
      <div className="flex items-center gap-2">
        <Icon className="size-8 ms-2 text-orange-500" />
        <h3 className="font-normal text-3xl text-zinc-500">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
