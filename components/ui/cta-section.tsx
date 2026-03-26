"use client";

import { GithubLogoIcon, ChatCircleIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[640px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
              Join the open source movement
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
              Whether you want to contribute code, report bugs, suggest
              features,
              <br />
              or just use the app - you&apos;re welcome here.
            </div>
          </div>
          <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="https://github.com/notedrop-app" target="_blank">
                <div className="h-10 px-8 py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors gap-2">
                  <GithubLogoIcon className="w-4 h-4 text-white" />
                  <div className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                    Star on GitHub
                  </div>
                </div>
              </Link>
              <Link href="https://discord.gg/notedrop" target="_blank">
                <div className="h-10 px-8 py-[6px] relative border border-[#37322f]/20 overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#37322f]/5 transition-colors gap-2">
                  <ChatCircleIcon className="w-4 h-4 text-[#37322f]" />
                  <div className="flex flex-col justify-center text-[#37322f] text-[13px] font-medium leading-5 font-sans">
                    Join Discord
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
