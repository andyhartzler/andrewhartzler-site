"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SparkleRevealProps {
  children: React.ReactNode;
  className?: string;
  sparkleCount?: number;
  delay?: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function SparkleReveal({
  children,
  className = "",
  sparkleCount = 60,
  delay = 0,
}: SparkleRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate sparkles once we know dimensions
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });

      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setSparkles(newSparkles);
    }
  }, [sparkleCount]);

  // Setup GSAP animation
  useEffect(() => {
    if (!containerRef.current || !sparklesRef.current || !contentRef.current || sparkles.length === 0) return;

    const sparkleElements = sparklesRef.current.querySelectorAll(".sparkle-particle");

    // Set initial states
    gsap.set(contentRef.current, { opacity: 0 });
    gsap.set(sparkleElements, { scale: 1, opacity: (i) => sparkles[i]?.opacity || 0.5 });

    // Create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      delay: delay,
    });

    // Animate sparkles exploding outward
    tl.to(sparkleElements, {
      x: () => (Math.random() - 0.5) * 400,
      y: () => (Math.random() - 0.5) * 300,
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.3,
        from: "random",
      },
      ease: "power2.out",
    })
    // Fade in the text
    .to(contentRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, [sparkles, delay]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Sparkles overlay */}
      <div
        ref={sparklesRef}
        className="absolute inset-0 pointer-events-none overflow-visible z-10"
      >
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle-particle absolute rounded-full bg-white"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
              opacity: sparkle.opacity,
              boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size / 2}px rgba(255, 255, 255, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-0">
        {children}
      </div>
    </div>
  );
}
