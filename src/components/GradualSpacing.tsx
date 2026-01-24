"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  className?: string;
}

function GradualSpacing({
  text,
  duration = 0.3,
  delayMultiple = 0.03,
  className,
}: GradualSpacingProps) {
  const words = text.split(" ");

  // Pre-calculate delays for each character
  let globalIndex = 0;
  const wordData = words.map((word) => {
    const chars = word.split("").map((char) => ({
      char,
      delay: globalIndex++ * delayMultiple,
    }));
    globalIndex++; // Account for space between words
    return chars;
  });

  return (
    <h1 className="flex flex-wrap md:flex-nowrap justify-center gap-x-3 md:gap-x-5 mb-8 leading-tight">
      {wordData.map((chars, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {chars.map((item, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration,
                delay: item.delay,
                ease: "easeOut"
              }}
              className={cn("drop-shadow-sm", className)}
            >
              {item.char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export { GradualSpacing };
