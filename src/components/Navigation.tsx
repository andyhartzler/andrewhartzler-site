"use client";

import Link from "next/link";
import { useState } from "react";
import { Dock, DockItem } from "./Dock";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-end h-16">

          {/* Desktop Navigation - Dock */}
          <div className="hidden md:block">
            <Dock magnification={1.15} distance={80}>
              <DockItem>
                <Link
                  href="/"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </DockItem>
              <DockItem>
                <Link
                  href="/projects"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </DockItem>
              <DockItem>
                <Link
                  href="/press"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Press
                </Link>
              </DockItem>
              <DockItem>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </DockItem>
            </Dock>
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
                href="/"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
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
