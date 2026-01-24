"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface MagnetButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  particleCount?: number;
}

export default function MagnetButton({
  href,
  children,
  className,
  external = false,
  particleCount = 12,
}: MagnetButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  // Generate particles on mount
  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  // Hover: pull particles to center
  const handleMouseEnter = async () => {
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    });
  };

  // Leave: scatter particles back out
  const handleMouseLeave = async () => {
    await particlesControl.start((i) => ({
      x: particles[i]?.x ?? 0,
      y: particles[i]?.y ?? 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    }));
  };

  const content = (
    <motion.div
      ref={buttonRef}
      className={cn("relative inline-block cursor-pointer", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Particles container */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {particles.map((particle, i) => (
            <motion.div
              key={particle.id}
              custom={i}
              animate={particlesControl}
              initial={{ x: particle.x, y: particle.y }}
              className="absolute rounded-full bg-white"
              style={{
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                left: -particle.size / 2,
                top: -particle.size / 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glow effect when hovering */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(15px)",
          transform: "scale(2)",
        }}
      />
      {children}
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
