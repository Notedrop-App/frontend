import type { Metadata } from "next";
import { Header } from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Subprocessors · Notedrop",
  description:
    "A list of third-party infrastructure providers that process data on behalf of Notedrop.",
};

interface Subprocessor {
  name: string;
  purpose: string;
  location: string;
  link: string;
  safeguard?: string;
}

const subprocessors: Subprocessor[] = [
  {
    name: "Railway",
    purpose: "Application hosting & deployment infrastructure",
    location: "United States (data stored in EU — Netherlands)",
    link: "https://railway.app/legal/privacy",
    safeguard: "Standard Contractual Clauses (SCCs)",
  },
];

const lastUpdated = "April 2026";

export default function SubprocessorsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ed] text-neutral-100 px-4">
      <div className="flex items-center justify-center mt-5 mb-20">
        <Header />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-[#37322f] uppercase mb-4">
            Legal / Subprocessors
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#37322f] mb-4">
            Subprocessors
          </h1>
          <p className="text-[#37322f] text-base leading-relaxed max-w-xl">
            Notedrop uses a small number of third-party infrastructure providers
            to operate the hosted service. These providers process data on our
            behalf under Data Processing Agreements in accordance with{" "}
            <span className="text-neutral-[#37322f] underline">
              Article 28 GDPR
            </span>
            .
          </p>
          <p className="mt-3 text-sm text-[#37322f]">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* What this page covers */}
        <div className="mb-12 border rounded-lg p-5 bg-[#f5f1ed] border-[#e0dedb]">
          <p className="text-sm text-[#37322f] leading-relaxed">
            This page does <span className="text-[#37322f] font-bold">not</span>{" "}
            apply to self-hosted instances of Notedrop. If you self-host, you
            act as the independent data controller and are responsible for your
            own subprocessor relationships.
          </p>
        </div>

        {/* Subprocessors table */}
        <section className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-[#37322f] uppercase mb-6">
            Current providers
          </h2>

          <div className="space-y-4">
            {subprocessors.map((sp) => (
              <div
                key={sp.name}
                className="border border-[#e0dedb] rounded-lg p-6 hover:border-neutral-700 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <a
                      href={sp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#37322f] font-medium hover:font-bold transition-all underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-500"
                    >
                      {sp.name}
                    </a>
                  </div>
                  {sp.safeguard && (
                    <span className="shrink-0 text-xs font-mono text-[#37322f] bg-[#f5f1ed] border border-[#e0dedb] px-2 py-1 rounded">
                      {sp.safeguard}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 text-sm text-[#37322f]">
                  <div className="flex gap-2">
                    <span className="text-[#37322f] w-20 shrink-0">
                      Purpose
                    </span>
                    <span>{sp.purpose}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#37322f] w-20 shrink-0">
                      Location
                    </span>
                    <span>{sp.location}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#37322f] w-20 shrink-0">Policy</span>
                    <a
                      href={sp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#37322f] hover:font-bold transition-all break-all"
                    >
                      {sp.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Changes section */}
        <section className="mb-16">
          <h2 className="text-xs font-mono tracking-widest text-[#37322f] uppercase mb-4">
            Changes to this list
          </h2>
          <p className="text-sm text-[#37322f] leading-relaxed">
            We update this page when subprocessors are added or removed.
            Material changes — such as adding a new provider that processes note
            content — will be communicated to users in advance where possible.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t border-neutral-800 pt-10">
          <h2 className="text-xs font-mono tracking-widest text-[#37322f] uppercase mb-4">
            Questions
          </h2>
          <p className="text-sm text-[#37322f] leading-relaxed">
            If you have questions about our subprocessors or data processing
            arrangements, contact us at{" "}
            <a
              href="mailto:privacy@notedrop.app"
              className="text-[#37322f] hover:font-bold transition-all underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400"
            >
              privacy@notedrop.app
            </a>
            .
          </p>

          <div className="mt-8 flex gap-4 text-xs text-neutral-600">
            <a
              href="/legal/privacy"
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/legal/terms"
              className="hover:text-neutral-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
