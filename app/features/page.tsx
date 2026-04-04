import {
  BookOpen,
  Code,
  GitFork,
  Headphones,
  Lightbulb,
  Lock,
  WifiOff,
} from "lucide-react";
import { Header } from "@/components/ui/header";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-[#f5f1ed]">
      <div className="flex items-center justify-center mt-5">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#49423D]/5 rounded-full border border-[#49423D]/10">
              <span className="text-sm font-mono text-[#49423D]/70">
                Free and Open Source
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#37322f]">
              Features
            </h1>
            <p className="text-lg md:text-xl text-[#37322f]/70 leading-relaxed">
              Simple tools that help you learn. No bloat, no tracking, no
              subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="w-full py-12 md:py-16 border-t border-[#e0dedb]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 md:gap-16">
            {/* AI Podcasts */}
            <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5f3f0] border border-[#e0dedb]">
                  <Headphones className="w-6 h-6 text-[#37322f]" />
                </div>
                <h2 className="text-2xl font-bold text-[#37322f]">
                  AI Podcasts
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#37322f]/80 leading-relaxed">
                  Turn your notes into audio. The AI runs locally in your
                  browser using transformers.js, so your notes never leave your
                  device. Listen while commuting, working out, or doing chores.
                </p>
                <ul className="space-y-2 text-[#37322f]/70 text-sm">
                  <li>- Text-to-speech runs entirely in-browser</li>
                  <li>- No cloud processing, no data sent anywhere</li>
                  <li>- Built-in audio player with playback controls</li>
                </ul>
              </div>
            </div>

            {/* AI Flash Cards */}
            <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5f3f0] border border-[#e0dedb]">
                  <BookOpen className="w-6 h-6 text-[#37322f]" />
                </div>
                <h2 className="text-2xl font-bold text-[#37322f]">
                  AI Flash Cards
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#37322f]/80 leading-relaxed">
                  Automatically generate flashcards from your notes. The AI
                  identifies key concepts and creates question-answer pairs to
                  help you study more effectively.
                </p>
                <ul className="space-y-2 text-[#37322f]/70 text-sm">
                  <li>- Extracts key terms and definitions automatically</li>
                  <li>- Spaced repetition support</li>
                  <li>- Export to standard formats</li>
                </ul>
              </div>
            </div>

            {/* AI Spotlight */}
            <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5f3f0] border border-[#e0dedb]">
                  <Lightbulb className="w-6 h-6 text-[#37322f]" />
                </div>
                <h2 className="text-2xl font-bold text-[#37322f]">
                  AI Spotlight
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[#37322f]/80 leading-relaxed">
                  Highlight any text and get instant explanations. No need to
                  switch tabs or open a search engine. Context-aware responses
                  based on your notes.
                </p>
                <ul className="space-y-2 text-[#37322f]/70 text-sm">
                  <li>- Inline explanations without leaving your notes</li>
                  <li>
                    - Adjustable depth: simple definition to detailed breakdown
                  </li>
                  <li>- Works offline with local models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="w-full py-12 md:py-16 border-t border-[#e0dedb]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold text-[#37322f] mb-10">
            Core Principles
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f3f0] border border-[#e0dedb]">
                <Lock className="w-5 h-5 text-[#37322f]" />
              </div>
              <h3 className="font-semibold text-[#37322f]">Privacy First</h3>
              <p className="text-sm text-[#37322f]/70">
                No analytics. No telemetry. No tracking. Your notes stay on your
                device.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f3f0] border border-[#e0dedb]">
                <WifiOff className="w-5 h-5 text-[#37322f]" />
              </div>
              <h3 className="font-semibold text-[#37322f]">Works Offline</h3>
              <p className="text-sm text-[#37322f]/70">
                AI features run locally. No internet required once the app is
                loaded.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f3f0] border border-[#e0dedb]">
                <Code className="w-5 h-5 text-[#37322f]" />
              </div>
              <h3 className="font-semibold text-[#37322f]">Open Source</h3>
              <p className="text-sm text-[#37322f]/70">
                AGPL-3.0 licensed. Inspect the code, verify our claims,
                self-host if you want.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f3f0] border border-[#e0dedb]">
                <GitFork className="w-5 h-5 text-[#37322f]" />
              </div>
              <h3 className="font-semibold text-[#37322f]">Community Driven</h3>
              <p className="text-sm text-[#37322f]/70">
                Features come from users. No investors, no growth metrics, just
                useful tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="w-full py-12 md:py-16 border-t border-[#e0dedb]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold text-[#37322f] mb-10">
            How It Works
          </h2>

          <div className="max-w-2xl space-y-6">
            <div className="space-y-2">
              <h3 className="font-mono text-sm text-[#37322f]/50">
                Local AI Processing
              </h3>
              <p className="text-[#37322f]/80 leading-relaxed">
                All AI features use transformers.js to run models directly in
                your browser. Your notes are processed on your device and never
                sent to external servers.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-mono text-sm text-[#37322f]/50">
                Data Storage
              </h3>
              <p className="text-[#37322f]/80 leading-relaxed">
                Notes are stored securely via our Go API backed by PostgreSQL.
                Your data is stored in our database and synced across your
                devices when connected.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-mono text-sm text-[#37322f]/50">
                Self-Hosting
              </h3>
              <p className="text-[#37322f]/80 leading-relaxed">
                Don&apos;t trust us? Run your own instance. The entire
                application is open source and can be deployed on your own
                infrastructure. Check the README for instructions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
