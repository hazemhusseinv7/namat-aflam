"use client";

import { useEffect, useState } from "react";

import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";

const HeroAnimation = () => {
  const [scale, setScale] = useState(0.4);
  const [imageSrc, setImageSrc] = useState("/hero/peeps.png");
  const [rows, setRows] = useState(9);
  const [cols, setCols] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;

      if (width < 768) {
        setImageSrc("/hero/peeps-mobile.png");
        setRows(6);
        setCols(4);
      } else {
        setImageSrc("/hero/peeps.png");
        setRows(9);
        setCols(7);
      }

      if (width < 640) setScale(0.32);
      // else if (width < 768) setScale();
      // else if (width < 1024) setScale();
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
      <CrowdCanvas src={imageSrc} rows={rows} cols={cols} scale={scale} />
    </div>
  );
};

export default HeroAnimation;
