"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedPressCardProps {
  publication: string;
  title: string;
  url: string;
  logo: string;
  index: number;
}

export default function AnimatedPressCard({
  publication,
  title,
  url,
  logo,
  index,
}: AnimatedPressCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 sm:p-6 rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-zinc-600 transition-all hover:bg-zinc-800/50 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        {/* Logo */}
        <div className="flex-shrink-0 w-24 sm:w-28 h-8 sm:h-10 flex items-center">
          <Image
            src={logo}
            alt={publication}
            width={112}
            height={40}
            className="object-contain max-h-8 sm:max-h-10"
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed line-clamp-3 sm:line-clamp-2">
            {title}
          </p>
        </div>

        <div className="flex-shrink-0 hidden sm:block">
          <svg
            className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
