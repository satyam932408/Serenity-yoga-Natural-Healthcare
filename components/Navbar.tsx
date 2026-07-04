"use client";

import { FaLeaf, FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
              <FaLeaf className="text-emerald-600 text-2xl" />
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl sm:text-2xl font-bold text-gray-900">
                Serenity Yoga &
              </h1>

              <h2 className="text-2xl sm:text-2xl font-bold text-gray-900">
                Natural Healthcare
              </h2>
            </div>
          </div>

          {/* Desktop Only CTA */}
          <a
            href="#contact"
            className="
              hidden md:inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-600
              px-6
              py-3
              text-white
              font-semibold
              shadow-md
              transition-all
              duration-300
              hover:bg-emerald-700
              hover:shadow-xl
              hover:-translate-y-1
            "
          >
            Book Consultation
            <FaArrowRight />
          </a>
        </div>
      </div>
    </header>
  );
}
