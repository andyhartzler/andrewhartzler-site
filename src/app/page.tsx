"use client";

import { GradualSpacing } from "@/components/GradualSpacing";
import SparkleReveal from "@/components/SparkleReveal";
import MagnetButton from "@/components/MagnetButton";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-zinc-400 font-medium mb-4 tracking-wide uppercase text-sm">
              Strategist, Organizer, Creator
            </p>
            <GradualSpacing
              text="Andrew Douglas Hartzler"
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagnetButton href="#work">
                <span className="px-8 py-3 bg-white hover:bg-zinc-200 text-black rounded-full font-medium transition-colors inline-block">
                  See My Work
                </span>
              </MagnetButton>
              <MagnetButton href="/contact">
                <span className="px-8 py-3 border border-zinc-600 hover:bg-zinc-900/50 rounded-full font-medium transition-colors inline-block">
                  Get in Touch
                </span>
              </MagnetButton>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <SparkleReveal sparkleCount={40}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Me
                </h2>
              </SparkleReveal>
              <SparkleReveal sparkleCount={80} delay={0.2}>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  I&apos;m currently pursuing my Master of Public Administration at the University of Missouri-Kansas City while working on advocacy and organizing projects. Based in Kansas City, I&apos;m passionate about creating meaningful change through education, policy, and community building.
                </p>
              </SparkleReveal>
              <SparkleReveal sparkleCount={80} delay={0.3}>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  My work spans political organizing, public speaking, and media engagement. I&apos;ve been fortunate to have my voice amplified through major news outlets and to collaborate with organizations working toward a more just society.
                </p>
              </SparkleReveal>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <SparkleReveal sparkleCount={40}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What I Do
                </h2>
              </SparkleReveal>
              <SparkleReveal sparkleCount={50} delay={0.1}>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
                  Combining education, advocacy, and organizing to drive meaningful impact.
                </p>
              </SparkleReveal>
              <SparkleReveal sparkleCount={40} delay={0.2}>
                <MagnetButton href="/projects">
                  <span className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-zinc-200 text-black rounded-full font-semibold text-lg transition-colors">
                    View My Projects
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </MagnetButton>
              </SparkleReveal>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section id="press" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <SparkleReveal sparkleCount={40}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured In
                </h2>
              </SparkleReveal>
              <SparkleReveal sparkleCount={50} delay={0.1}>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                  My work has been covered by major outlets nationwide.
                </p>
              </SparkleReveal>
            </div>

            {/* Featured Outlets Logos/Names */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12">
              {["Politico", "People", "NBC News", "The Guardian", "MSNBC", "Buzzfeed", "Business Insider", "The Advocate"].map((outlet, index) => (
                <SparkleReveal key={outlet} sparkleCount={20} delay={0.15 + index * 0.08}>
                  <span className="text-zinc-500 text-lg font-medium hover:text-white transition-colors">
                    {outlet}
                  </span>
                </SparkleReveal>
              ))}
            </div>

            <div className="text-center">
              <SparkleReveal sparkleCount={30} delay={0.15 + 8 * 0.08}>
                <MagnetButton href="/press">
                  <span className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80 rounded-full font-medium transition-colors">
                    View All Coverage
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </MagnetButton>
              </SparkleReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SparkleReveal sparkleCount={40}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Connect
              </h2>
            </SparkleReveal>
            <SparkleReveal sparkleCount={60} delay={0.1}>
              <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                Interested in collaborating, speaking engagements, or media inquiries? I&apos;d love to hear from you.
              </p>
            </SparkleReveal>
            <SparkleReveal sparkleCount={40} delay={0.2}>
              <MagnetButton href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-full font-medium transition-colors">
                  Get in Touch
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </MagnetButton>
            </SparkleReveal>
          </div>
        </section>
    </main>
  );
}
