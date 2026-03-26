"use client";

import { useState, useEffect } from "react";

export function FeatureCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "100% Open Source",
      description:
        "Every line of code is public. Fork it,\nmodify it, make it yours. MIT licensed.",
    },
    {
      title: "Self-Host or Cloud",
      description:
        "Run on your own server for full control,\nor use our hosted version. Your choice.",
    },
    {
      title: "Community Driven",
      description:
        "Built by contributors worldwide. Join us\nand shape the future of note-taking.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="border-t border-[#e0dedb] border-b border-[#e0dedb]">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 flex flex-col gap-2 rounded-lg transition-all duration-700 ease-in-out min-h-[160px] ${
                index === activeIndex
                  ? "bg-white border border-[#e0dedb] shadow-sm scale-[1.02]"
                  : "border border-[#e0dedb]/80 scale-100"
              }`}
            >
              <div
                className={`absolute top-4 left-6 space-y-1 transition-all duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-0.5 bg-[#322d2b]/8"></div>
                <div className="w-32 h-0.5 bg-[#322d2b]"></div>
              </div>
              <div className="pt-6">
                <h3 className="text-[#49423d] text-sm font-semibold leading-6">
                  {feature.title}
                </h3>
                <p className="text-[#605a57] text-sm leading-[22px] whitespace-pre-line mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
