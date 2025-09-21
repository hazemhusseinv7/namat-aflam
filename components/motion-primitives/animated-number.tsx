"use client";

import { JSX, useEffect, useRef } from "react";

import {
  motion,
  SpringOptions,
  useInView,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = "span",
}: AnimatedNumberProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.3,
  });

  const MotionComponent = motion.create(as as keyof JSX.IntrinsicElements);

  const spring = useSpring(0, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [spring, value, isInView]);

  return (
    <div ref={containerRef}>
      <MotionComponent
        className={cn("tabular-nums", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {display}
      </MotionComponent>
    </div>
  );
}
