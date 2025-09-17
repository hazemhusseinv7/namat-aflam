"use client";

import { useEffect, useState } from "react";

import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";

const HeroAnimation = () => {
  const [scale, setScale] = useState(0.4);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      if (width < 640) setScale(0.18);
      else if (width < 768) setScale(0.25);
      else if (width < 1024) setScale(0.3);
      else if (width < 1280) setScale(0.35);
      else setScale(0.4);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas src="/hero/peeps.png" rows={9} cols={7} scale={scale} />
    </div>
  );
};

export default HeroAnimation;
