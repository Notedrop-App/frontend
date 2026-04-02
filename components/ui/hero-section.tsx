"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubLogoIcon, HeartIcon } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#37322f]/5 rounded-full border border-[#37322f]/10">
            <HeartIcon className="w-4 h-4 text-[#37322f]" />
            <span className="text-sm font-medium text-[#37322f]">
              Free & Open Source Forever
            </span>
          </div>

          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-[#37322f] text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                Your notes, your data, your freedom
              </h1>
              <p className="max-w-[560px] text-center text-[#37322f]/80 text-lg font-medium leading-7">
                An open-source, AI-powered note-taking app built by the
                community, for the community. No subscriptions, no vendor
                lock-in, just pure productivity.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              onClick={() => (window.location.href = "/login")}
              className="h-10 px-8 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
            >
              Get Started
            </Button>
            <Link href="https://github.com/orgs/notedrop-app" target="_blank">
              <Button
                variant="outline"
                className="h-10 px-8 rounded-full font-medium text-sm border-[#37322f]/20 text-[#37322f] hover:bg-[#37322f]/5"
              >
                <GithubLogoIcon className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
