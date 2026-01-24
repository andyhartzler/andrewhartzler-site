"use client";

import Link from "next/link";
import { GradualSpacing } from "@/components/GradualSpacing";

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
              delayMultiple={30}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#work"
                className="px-8 py-3 bg-white hover:bg-zinc-200 text-black rounded-full font-medium transition-colors"
              >
                See My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-zinc-600 hover:bg-zinc-900/50 rounded-full font-medium transition-colors"
              >
                Get in Touch
              </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Me
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                I&apos;m currently pursuing my Master of Public Administration at the University of Missouri-Kansas City while working on advocacy and organizing projects. Based in Kansas City, I&apos;m passionate about creating meaningful change through education, policy, and community building.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                My work spans political organizing, public speaking, and media engagement. I&apos;ve been fortunate to have my voice amplified through major news outlets and to collaborate with organizations working toward a more just society.
              </p>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What I Do
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Combining education, advocacy, and organizing to drive meaningful impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Graduate Studies Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-zinc-600 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Public Administration
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Pursuing my MPA at UMKC, focusing on public policy, governance, and creating effective systems for positive community impact.
                </p>
              </div>

              {/* Advocacy Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-zinc-600 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Advocacy & Policy
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Working on civil rights issues and education policy reform. Part of ongoing efforts challenging discriminatory practices in higher education.
                </p>
                <a
                  href="https://web.archive.org/web/20250417073403/https://www.thereap.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white text-sm mt-4 hover:underline"
                >
                  Learn about REAP
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Political Organizing Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-zinc-600 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Political Organizing
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Active with Missouri Young Democrats, working to elect progressive candidates and shape policies at the state and local level.
                </p>
                <a
                  href="https://moyoungdemocrats.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white text-sm mt-4 hover:underline"
                >
                  Get involved
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section id="press" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured In
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                My work has been covered by major outlets nationwide.
              </p>
            </div>

            {/* Featured Outlets Logos/Names */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12">
              {["Politico", "People", "NBC News", "The Guardian", "MSNBC", "Buzzfeed", "Business Insider", "The Advocate"].map((outlet) => (
                <span key={outlet} className="text-zinc-500 text-lg font-medium hover:text-white transition-colors">
                  {outlet}
                </span>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/press"
                className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80 rounded-full font-medium transition-colors"
              >
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
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Interested in collaborating, speaking engagements, or media inquiries? I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-full font-medium transition-colors"
            >
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
            </Link>
          </div>
        </section>
    </main>
  );
}
