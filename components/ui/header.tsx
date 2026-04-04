"use client";

import logo from "@/public/favicon.jpg";
import Image from "next/image";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import { useState } from "react";

export function Header() {
  const [menuOpen, setIsMenuOpen] = useState<boolean>(false);

  function openHamburgerMenu() {}

  return (
    <div className="flex items-center justify-center mt-9">
      <header className="rounded-lg w-10/12 bg-[#f5f1ed] h-13 p-4 flex flex-row items-center border border-[#37322f]-90 shadow-xs fixed z-50 backdrop-blur-xl opacity-98">
        <nav className="flex flex-row  flex-wrap justify-between mx-auto container items-center">
          <div
            className="flex items-center flex-row space-x-3 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <Image src={logo} className="h-8 w-8 rounded-lg" alt="logo" />
            <p className="font-semibold text-[#37322f]">Notedrop.</p>
          </div>
          <div className="items-center space-x-4 font-light text-[#37322f] text-sm ">
            <div className="hidden md:block space-x-4">
              {["Features", "Docs", "Privacy"].map((item) => (
                <Link
                  key={item}
                  href={
                    item.toLowerCase() === "privacy"
                      ? "/legal/privacy"
                      : `/${item.toLowerCase()}`
                  }
                  className="relative inline-block group"
                >
                  {item}
                  <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 bg-[#37322f] transition-all duration-300 ease-in-out group-hover:w-full" />
                </Link>
              ))}
              <Button className="h-7 px-4 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]">
                Sign Up
              </Button>
            </div>
            <div className="sm:block md:hidden">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="transition-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <ListIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <Sheet open={menuOpen} onOpenChange={() => setIsMenuOpen(!menuOpen)}>
        <SheetContent className="flex p-4 bg-[#f5f1ed]">
          <SheetTitle className="flex-row flex items-center space-x-2">
            <Image src={logo} className="h-8 w-8 rounded-lg" alt="logo" />
            <p className="font-semibold text-[#37322f]">Notedrop.</p>
          </SheetTitle>
          <div className="flex flex-col p-2">
            <div className="flex flex-col space-y-2 mb-6">
              {["Features", "Docs", "Privacy"].map((item) => (
                <Link
                  key={item}
                  href={
                    item.toLowerCase() === "privacy"
                      ? "/legal/privacy"
                      : `/${item.toLowerCase()}`
                  }
                  className="relative inline-block group text-lg"
                >
                  {item}
                  <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 bg-[#37322f] transition-all duration-300 ease-in-out group-hover:w-full" />
                </Link>
              ))}
            </div>
            <Button variant="outline" className="w-fit px-6">
              Sign Up →
            </Button>
          </div>
          <SheetFooter className="text-[#49423D]/60 text-xs font-mono">
            No tracking. No telemetry. Your notes, your data.
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
