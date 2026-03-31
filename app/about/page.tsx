import { Header } from "@/components/ui/header";
import {
  BookOpen,
  Users,
  GitFork,
  Heart,
  Scale,
  Eye,
  Lock,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#f5f1ed]">
      <div className="flex items-center justify-center mt-5">
        <Header />
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#49423D]/5 rounded-full border border-[#49423D]/10">
              <span className="text-sm font-mono text-[#49423D]/70">
                100% Free and Open Source
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#37322f]">
                About Notedrop
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-[#37322f]/80 leading-relaxed">
                Built in the open, by the community, for everyone. No venture
                capital, no tracking, no bullshit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 border-t border-[#e0dedb]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#37322f]">
                Why Open Source?
              </h2>
              <p className="text-lg leading-relaxed text-[#37322f]/80">
                We believe that software for learning should be free as in
                freedom, not just free as in beer. When your notes contain your
                thoughts, ideas, and knowledge, you deserve to know exactly what
                happens to them.
              </p>
              <p className="text-lg leading-relaxed text-[#37322f]/80">
                Open source means you can inspect every line of code, verify
                there&apos;s no telemetry or tracking, and even run Notedrop on
                your own server if you want complete control. Your data stays
                yours.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="https://github.com/notedrop-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#37322f] text-white rounded-lg hover:bg-[#49423D] transition-colors font-medium text-sm"
                >
                  <GitFork className="w-4 h-4" />
                  View Source
                </Link>
                <Link
                  href="https://github.com/notedrop-app/frontend/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#37322f]/20 rounded-lg hover:bg-[#37322f]/5 transition-colors font-medium text-sm text-[#37322f]"
                >
                  <Scale className="w-4 h-4" />
                  AGPL-3.0
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#37322f]">
                Community Driven
              </h2>
              <p className="text-lg leading-relaxed text-[#37322f]/80">
                Notedrop isn&apos;t built by a faceless corporation chasing
                growth metrics. It&apos;s built by students, developers, and
                educators who actually use it. Every feature request comes from
                real users, and every contribution is welcomed.
              </p>
              <p className="text-lg leading-relaxed text-[#37322f]/80">
                We don&apos;t have a product roadmap dictated by investors. Our
                roadmap is shaped by the community through GitHub Discussions.
                If you want a feature, propose it. If you can build it, submit a
                PR. That&apos;s how open source works.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="https://github.com/notedrop-app/frontend/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#37322f]/20 rounded-lg hover:bg-[#37322f]/5 transition-colors font-medium text-sm text-[#37322f]"
                >
                  <Users className="w-4 h-4" />
                  Join Discussions
                </Link>
                <Link
                  href="https://github.com/notedrop-app/frontend/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#37322f]/20 rounded-lg hover:bg-[#37322f]/5 transition-colors font-medium text-sm text-[#37322f]"
                >
                  <Heart className="w-4 h-4" />
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 border-t border-[#e0dedb]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-[#37322f]">
              Our Principles
            </h2>
            <p className="text-lg text-[#37322f]/70 max-w-2xl mx-auto">
              These aren&apos;t marketing buzzwords. They&apos;re commitments we
              make to every user.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f3f0]">
                <Eye className="w-8 h-8 text-[#37322f]" />
              </div>
              <h3 className="text-xl font-bold text-[#37322f]">Transparency</h3>
              <p className="text-[#37322f]/80">
                Every line of code is public. No hidden tracking, no secret
                algorithms, no surprises.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f3f0]">
                <Lock className="w-8 h-8 text-[#37322f]" />
              </div>
              <h3 className="text-xl font-bold text-[#37322f]">
                Privacy First
              </h3>
              <p className="text-[#37322f]/80">
                No analytics, no telemetry, no selling your data. We literally
                can&apos;t read your notes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f3f0]">
                <Globe className="w-8 h-8 text-[#37322f]" />
              </div>
              <h3 className="text-xl font-bold text-[#37322f]">Accessible</h3>
              <p className="text-[#37322f]/80">
                Free forever. Self-hostable. Works offline. Education tools
                should be available to everyone.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f3f0]">
                <BookOpen className="w-8 h-8 text-[#37322f]" />
              </div>
              <h3 className="text-xl font-bold text-[#37322f]">
                Learning Focused
              </h3>
              <p className="text-[#37322f]/80">
                Built by people who actually study. Features that help you
                learn, not features that look good in demos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 border-t border-[#e0dedb]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-[#37322f]">
              The FOSS Philosophy
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed text-[#37322f]/80">
                Free and Open Source Software isn&apos;t just a licensing
                choice—it&apos;s a statement about how we believe software
                should be built. When Richard Stallman started the GNU project
                in 1983, he articulated four essential freedoms that we still
                hold dear:
              </p>
              <ul className="space-y-3 text-[#37322f]/80">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-sm bg-[#37322f]/10 px-2 py-1 rounded">
                    0
                  </span>
                  <span>
                    The freedom to run the program as you wish, for any purpose.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-sm bg-[#37322f]/10 px-2 py-1 rounded">
                    1
                  </span>
                  <span>
                    The freedom to study how the program works, and change it.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-sm bg-[#37322f]/10 px-2 py-1 rounded">
                    2
                  </span>
                  <span>
                    The freedom to redistribute copies so you can help others.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-sm bg-[#37322f]/10 px-2 py-1 rounded">
                    3
                  </span>
                  <span>
                    The freedom to distribute copies of your modified versions.
                  </span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-[#37322f]/80">
                Notedrop embraces all four freedoms. We chose the AGPL-3.0
                license because we believe that improvements to Notedrop should
                benefit everyone. If you modify and deploy Notedrop, you must
                share your changes with the community. This ensures that no
                corporation can take our work, improve it, and keep those
                improvements proprietary. Fork it, improve it, share it back.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 border-t border-[#e0dedb]">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-[#37322f]">
            Join the Movement
          </h2>
          <p className="text-lg text-[#37322f]/70 max-w-2xl mx-auto mb-8">
            Whether you&apos;re a developer, designer, translator, or just
            someone who cares about open source education tools—there&apos;s a
            place for you in the Notedrop community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/notedrop-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#37322f] text-white rounded-lg hover:bg-[#49423D] transition-colors font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                />
              </svg>
              Star on GitHub
            </Link>
            <Link
              href="https://matrix.to/#/#notedrop:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#37322f]/20 rounded-lg hover:bg-[#37322f]/5 transition-colors font-medium text-[#37322f]"
            >
              Chat on Matrix
            </Link>
            <Link
              href="https://opencollective.com/notedrop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#37322f]/20 rounded-lg hover:bg-[#37322f]/5 transition-colors font-medium text-[#37322f]"
            >
              <Heart className="w-5 h-5" />
              Sponsor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
