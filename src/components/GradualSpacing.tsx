"use client";

import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface GradualSpacingProps {
  text: string;
  className?: string;
}

function GradualSpacing({ text, className }: GradualSpacingProps) {
  const wordData = useMemo(() => {
    const words = text.split(" ");
    let globalIndex = 0;

    return words.map((word) => ({
      word,
      chars: word.split("").map((char) => ({
        char,
        delay: globalIndex++ * 0.04,
      })),
    }));
  }, [text]);

  return (
    <h1 className="flex flex-wrap md:flex-nowrap justify-center gap-x-3 md:gap-x-5 mb-8 leading-tight">
      {wordData.map((wordObj, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {wordObj.chars.map((charObj, charIndex) => (
            <span
              key={charIndex}
              className={cn("animate-fade-in", className)}
              style={{
                animationDelay: `${charObj.delay}s`,
              }}
            >
              {charObj.char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export { GradualSpacing };
