"use client";

import logo from "@/public/favicon.jpg";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="flex items-center justify-between gap-8 px-6 py-3 bg-[#faf9f7]/80 backdrop-blur-md border border-[#e0dedb] rounded-full shadow-lg">
        <div className="flex items-center space-x-8">
          <div
            className="text-[#37322f] font-semibold text-lg flex flex-row items-center justify-center"
            onClick={() => (window.location.href = "/")}
          >
            <Image src={logo} className="w-10 h-10 rounded-xl" alt="logo" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/features"
              className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="/docs"
              className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
            >
              Docs
            </a>
          </div>
        </div>
        <a
          href="/login"
          className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
