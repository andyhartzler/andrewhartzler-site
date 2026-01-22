"use client";

import { SparklesCore } from "./SparklesCore";

export default function GlobalSparkles() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <SparklesCore
        id="global-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={80}
        className="w-full h-full"
        particleColor="#ffffff"
        speed={3}
      />
    </div>
  );
}
