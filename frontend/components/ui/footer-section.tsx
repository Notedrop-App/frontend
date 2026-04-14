"use client";

export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start">
      <div className="self-stretch flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 pr-0 pb-8 pt-0">
        <div className="w-full lg:w-auto lg:max-w-sm p-4 md:p-8 flex flex-col justify-start items-start gap-6">
          <div className="flex justify-start items-center gap-3">
            <div className="text-[#49423D] text-xl font-semibold leading-6 font-mono">
              Notedrop
            </div>
          </div>
          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-relaxed font-sans max-w-xs">
            Free and open source note-taking for everyone. Built by the
            community, for the community.
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#49423D]/5 rounded-md border border-[#49423D]/10">
            <span className="text-xs font-mono text-[#49423D]/70">
              MIT License
            </span>
          </div>
          <div className="flex justify-start items-start gap-4">
            <a
              href="https://github.com/SkuliX01/Notedrop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              title="Star us on GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  fill="#49423D"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-auto p-4 md:p-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-xs font-mono uppercase tracking-wider leading-5">
              Project
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <a
                href="/features"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Features
              </a>
              <a
                href="https://github.com/notedrop-app/frontend/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Releases
              </a>
              <a
                href="https://github.com/notedrop-app/frontend/blob/main/ROADMAP.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Roadmap
              </a>
              <a
                href="https://github.com/notedrop/notedrop/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Changelog
              </a>
            </div>
          </div>

          {/* Community Column */}
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-xs font-mono uppercase tracking-wider leading-5">
              Community
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <a
                href="https://github.com/notedrop-app/frontend/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Discussions
              </a>
              <a
                href="https://github.com/notedrop-app/frontend/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Contributing
              </a>
              <a
                href="https://github.com/notedrop-app/frontend/blob/main/CODE_OF_CONDUCT.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Code of Conduct
              </a>
              <a
                href="https://opencollective.com/notedrop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Sponsor
              </a>
            </div>
          </div>

          {/* Develop Column */}
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-xs font-mono uppercase tracking-wider leading-5">
              Develop
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <a
                href="https://docs.notedrop.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Documentation
              </a>
              <a
                href="https://github.com/notedrop-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Source Code
              </a>
              <a
                href="https://github.com/notedrop-app/frontend/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Issue Tracker
              </a>
              <a
                href="https://github.com/notedrop-app/frontend/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Security
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-xs font-mono uppercase tracking-wider leading-5">
              About
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <a
                href="/about"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                About
              </a>
              <a
                href="/legal/privacy"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                Privacy
              </a>
              <a
                href="https://github.com/notedrop-app/frontend/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                License
              </a>
              <a
                href="/humans.txt"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:underline transition-colors"
              >
                humans.txt
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-[#49423D]/10 px-4 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[#49423D]/60 text-xs font-mono">
          Built with {"❤️"} By{" "}
          <a className="underline" href="https://github.com/skulix01">
            SkuliX
          </a>
        </p>
        <p className="text-[#49423D]/60 text-xs font-mono">
          No tracking. No telemetry. Your notes, your data.
        </p>
      </div>
    </div>
  );
}
