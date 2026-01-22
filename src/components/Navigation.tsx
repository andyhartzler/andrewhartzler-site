"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors"
          >
            Home
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#advocacy"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Advocacy
            </Link>
            <Link
              href="/press"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Press
            </Link>
            <Link
              href="/contact"
              className="text-sm px-4 py-2 bg-white hover:bg-zinc-200 text-black rounded-full transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-black/90 backdrop-blur-sm -mx-6 px-6">
            <div className="flex flex-col gap-4">
              <Link
                href="/#about"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#advocacy"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Advocacy
              </Link>
              <Link
                href="/press"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Press
              </Link>
              <Link
                href="/contact"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
