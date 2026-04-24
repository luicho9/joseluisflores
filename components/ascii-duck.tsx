"use client";

import { useEffect, useRef } from "react";
import { createAsciiRenderer } from "landing-effects";

export function AsciiDuck() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = createAsciiRenderer({
      canvas: canvasRef.current,
      imageSrc: "/duck.png",
      fontSize: 7,
      brightnessBoost: 2.4,
      parallaxStrength: 6,
      colorFn: (l) => {
        const v = Math.round(l * 220);
        return `rgb(${v}, ${Math.round(v * 0.92)}, ${Math.round(v * 0.78)})`;
      },
    });
    return cleanup;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={160}
      height={160}
      className="w-32 h-32 md:w-40 md:h-40 shrink-0"
      aria-label="ASCII pato"
    />
  );
}
