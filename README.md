<p align="center">
  <img src="https://notedrop.app/favicon.jpg" alt="Notedrop Logo" width="80" height="80">
</p>

<h1 align="center">Notedrop</h1>

<p align="center">
  <strong>Your notes, your data, your freedom.</strong>
</p>

<p align="center">
  An open-source, AI-powered note-taking app built by the community, for the community.
</p>

<p align="center">
  <a href="https://github.com/notedrop-app/frontend/stargazers"><img src="https://img.shields.io/github/stars/notedrop/notedrop?style=flat-square&color=37322f" alt="GitHub Stars"></a>
  <a href="https://github.com/notedrop-app/frontend/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-37322f?style=flat-square" alt="License"></a>
  <a href="https://github.com/notedrop-app/frontend/contributors"><img src="https://img.shields.io/github/contributors/notedrop/notedrop?style=flat-square&color=37322f" alt="Contributors"></a>
  <a href="https://discord.gg/notedrop"><img src="https://img.shields.io/discord/1234567890?style=flat-square&color=37322f&label=discord" alt="Discord"></a>
</p>

<p align="center">
  <a href="https://notedrop.app">Website</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#self-hosting">Self-Hosting</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#community">Community</a>
</p>

---

## Why Notedrop?

We believe note-taking software should be **free**, **private**, and **yours**. No subscriptions, no vendor lock-in, no selling your data. Just a powerful tool that helps you capture and organize your thoughts.

- **100% Open Source** - Every line of code is public under AGPL 3.0
- **Self-Host or Cloud** - Run on your own server or use our hosted version
- **AI-Powered** - Smart features that actually help you learn
- **Community Driven** - Built by contributors worldwide

---

## Features

### AI Spotlight
Highlight any text in your notes and get instant AI-powered explanations. No more switching tabs to look things up.

### AI Flashcards
Transform your notes into smart flashcards automatically. Study smarter with spaced repetition powered by AI.

### AI Podcasts
Convert your notes into audio with natural-sounding AI voices. Learn on the go while commuting or working out.

### Community Library
Access a growing database of public notes and learning materials shared by users worldwide. Choose to make your notes public and help others learn.

### Privacy First
Your private notes are encrypted. Public notes in the Community Library are stored unencrypted for easy access - but you decide what to share.

---

## Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/skulix01/notedrop.git
cd notedrop

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see Notedrop in action.

---

## Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: [Go](https://go.dev)
- **Database**: [MongoDB](https://mongodb.com)
- **AI**: [Open AI Models](https://huggingface.co/)
---

## Contributing

We welcome contributions of all kinds! Whether you're fixing bugs, adding features, improving documentation, or helping others in discussions.

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `pnpm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Good First Issues

New to open source? Check out issues labeled [`good first issue`](https://github.com/notedrop-app/frontend/labels/good%20first%20issue) - they're perfect for newcomers!

For more details, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Community

Join our growing community of developers, learners, and note-taking enthusiasts!

- **Discord**: [Join our server](https://discord.gg/notedrop) for real-time chat
- **GitHub Discussions**: [Ask questions](https://github.com/notedrop-app/frontend/discussions) and share ideas

---

## License

Notedrop is open source software licensed under the [AGPL 3.0 License](LICENSE).

This means you're free to use, modify, and self-host Notedrop. If you modify and distribute Notedrop (including running it as a service), you must make your source code available under the same license.

---

## Sponsors

Notedrop is built by volunteers in their spare time. If you find it useful, consider supporting the project:

- [GitHub Sponsors](https://github.com/sponsors/notedrop-app)
- [Open Collective](https://opencollective.com/notedrop)

---

<p align="center">
  Made with care by the Notedrop community
</p>

<p align="center">
  <a href="https://notedrop.app">notedrop.app</a>
</p>
