"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface GradualSpacingProps {
  text: string;
  delayMultiple?: number;
  className?: string;
}

function GradualSpacing({
  text,
  delayMultiple = 30,
  className,
}: GradualSpacingProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const chars = text.split("");

  useEffect(() => {
    if (visibleCount < chars.length) {
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, delayMultiple);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, chars.length, delayMultiple]);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <h1 className="flex flex-wrap md:flex-nowrap justify-center gap-x-3 md:gap-x-5 mb-8 leading-tight">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, i) => {
            const currentIndex = charIndex++;
            const isVisible = currentIndex < visibleCount;
            return (
              <span
                key={i}
                className={cn(
                  "transition-all duration-300",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2",
                  className
                )}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (() => { charIndex++; return null; })()}
        </span>
      ))}
    </h1>
  );
}

export { GradualSpacing };
