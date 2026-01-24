import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Andrew Douglas Hartzler",
  description:
    "Projects and initiatives by Andrew Hartzler in advocacy, policy, and political organizing.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Combining education, advocacy, and organizing to drive meaningful impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* REAP Card */}
          <a
            href="https://web.archive.org/web/20250417073403/https://www.thereap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-zinc-600 transition-colors group block"
          >
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
              REAP - Religious Exemption Accountability Project
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Working on civil rights issues and education policy reform. Part of ongoing efforts challenging discriminatory practices in higher education through a class-action lawsuit.
            </p>
            <span className="inline-flex items-center gap-1 text-white text-sm group-hover:underline">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Missouri Young Democrats Card */}
          <a
            href="https://moyoungdemocrats.org"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-zinc-600 transition-colors group block"
          >
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
              Missouri Young Democrats
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Active with Missouri Young Democrats, working to elect progressive candidates and shape policies at the state and local level.
            </p>
            <span className="inline-flex items-center gap-1 text-white text-sm group-hover:underline">
              Get involved
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Content Creation Card */}
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Content Creation
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Creating educational and advocacy content on TikTok and other platforms, sharing stories about religious trauma, LGBTQ+ rights, and political engagement.
            </p>
          </div>

          {/* Public Speaking Card */}
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
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Public Speaking
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Speaking at events, conferences, and media appearances about LGBTQ+ advocacy, religious exemptions in education, and political organizing.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
