"use client";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  className?: string;
}

function GradualSpacing({ text, className }: GradualSpacingProps) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <h1 className="flex flex-wrap md:flex-nowrap justify-center gap-x-3 md:gap-x-5 mb-8 leading-tight">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, i) => {
            const delay = charIndex * 0.04;
            charIndex++;
            return (
              <span
                key={i}
                className={cn("animate-fade-in", className)}
                style={{
                  animationDelay: `${delay}s`,
                  opacity: 0,
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export { GradualSpacing };
