"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
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
    <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
      <AnimatePresence>
        {wordData.map((chars, wordIndex) => (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {chars.map((item, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={framerProps}
                transition={{ duration, delay: item.delay }}
                className={cn("drop-shadow-sm", className)}
              >
                {item.char}
              </motion.span>
            ))}
          </span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { GradualSpacing };
