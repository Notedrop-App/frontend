"use client";

import logo from "@/public/favicon.jpg";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-[#f5f1ed] h-10 p-4 flex flex-row items-center border-b border-[#37322f]-90 shadow-xs">
      <nav className="flex flex-row  flex-wrap justify-between mx-auto container items-center">
        <div
          className="flex items-center flex-row space-x-3 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <Image src={logo} className="h-8 w-8 rounded-lg" alt="logo" />
          <p className="font-semibold text-[#37322f]">Notedrop.</p>
        </div>
        <div className="items-center space-x-4 font-light text-[#37322f] text-sm ">
          <Link
            href="features"
            className="underline-none hover:underline underline-offset-3"
          >
            Features
          </Link>
          <Link
            href="Docs"
            className="underline-none hover:underline underline-offset-3"
          >
            Docs
          </Link>
          <Link
            href="https://github.com/Notedrop-App"
            className="underline-none hover:underline underline-offset-3"
          >
            Contribute
          </Link>
        </div>
      </nav>
    </header>
  );
}
