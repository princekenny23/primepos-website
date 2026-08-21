"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%2030-day%20free%20trial";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3 transition hover:opacity-90" aria-label="PrimePOS home">
          <Image src="/icon3.jpg" alt="PrimePOS logo" width={120} height={50} className="h-10 w-auto" priority />
          <span className="text-sm font-bold tracking-tight text-slate-900">PrimePOS</span>
        </Link>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-blue-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
          <Link
            href={whatsappBookDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-4 py-2"
          >
            Book a 30-day free trial
          </Link>
        </div>

        {isOpen && (
          <div className="w-full lg:hidden">
            <div className="rounded-3xl border border-blue-700/50 bg-blue-900 p-5 shadow-xl shadow-black/10">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={whatsappBookDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
                >
                  Book a 30-day free trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
