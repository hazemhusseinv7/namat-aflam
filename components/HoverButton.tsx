"use client";

import { ElementType, useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface HoverButtonProps {
  content: string;
  className?: string;
  as?: ElementType;
  href?: string;
}

const HoverButton = ({
  content,
  className,
  as: Tag = "button",
  href,
}: HoverButtonProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0 });
  const [gradientOpacity, setGradientOpacity] = useState({ left: 1, right: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    setCursorPosition({ x });

    // Calculate gradient opacity based on cursor position
    const leftOpacity = Math.max(0, Math.min(1, 1 - x / (rect.width / 2)));
    const rightOpacity = Math.max(
      0,
      Math.min(1, (x - rect.width / 2) / (rect.width / 2))
    );

    setGradientOpacity({ left: leftOpacity, right: rightOpacity });
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setCursorPosition({ x: 0 });
      setGradientOpacity({ left: 1, right: 0 });

      // Clear the timeout after it executes
      clearTimeout(timeoutId);
    }, 2000);
  };

  return (
    <Tag
      href={href}
      className={cn(
        className,
        "relative rounded-full flex items-center w-56 md:w-80 text-black z-50"
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left gradient */}
      <div
        style={{ opacity: gradientOpacity.left }}
        className="absolute -left-2 h-[125%] w-1/2 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
      />
      <div
        style={{ opacity: gradientOpacity.left }}
        className="absolute -left-2 h-[125%] w-2/5 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
      />

      {/* Right gradient */}
      <div
        style={{ opacity: gradientOpacity.right }}
        className="absolute -right-2 h-[125%] w-1/2 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
      />
      <div
        style={{ opacity: gradientOpacity.right }}
        className="absolute -right-2 h-[125%] w-2/5 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
      />

      <div className="relative flex justify-center items-center border border-white/60 bg-[#d1d1d1] w-full py-2 md:py-2.5 rounded-full overflow-hidden">
        <motion.div
          animate={{
            left: `${cursorPosition.x - 102}px`,
          }}
          transition={{ duration: 0.15 }}
          className="absolute flex w-[204px] h-[103px] items-center justify-center pointer-events-none"
        >
          <div className="absolute h-full w-full bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
        </motion.div>
        <span className="text-lg font-semibold z-10">{content}</span>
      </div>
    </Tag>
  );
};

export default HoverButton;
