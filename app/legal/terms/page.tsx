import { Header } from "@/components/ui/header";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen bg-[#f5f1ed]">
      <div className="flex items-center justify-center mt-5">
        <Header />
      </div>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#49423D]/5 rounded-md border border-[#49423D]/10 w-fit">
                <span className="text-xs font-mono text-[#49423D]/70">
                  AGPL-3.0 Licensed
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#37322f]">
                Terms of Service
              </h1>
              <p className="text-sm text-[#37322f]/70">
                <strong>Effective:</strong> January 2026 |{" "}
                <strong>Last updated:</strong> April 2026
              </p>
              <p className="text-[#37322f]/80 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your use of
                the Notedrop hosted service available at notedrop.app
                (&quot;Service&quot;), operated by Bartosz Krawczyk
                (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              </p>
              <p className="text-[#37322f]/80 leading-relaxed">
                By creating an account or using the Service, you agree to these
                Terms. If you do not agree, do not use the Service.
              </p>
            </div>

            <div className="bg-[#f5f3f0] border border-[#e0dedb] rounded-lg p-6 space-y-3">
              <h3 className="font-bold text-[#37322f]">TL;DR</h3>
              <ul className="space-y-2 text-[#37322f]/80 text-sm">
                <li>- Notedrop is free and open source software, forever</li>
                <li>
                  - Your notes are yours — we claim no rights over your content
                </li>
                <li>- Use the Service lawfully and don&apos;t abuse it</li>
                <li>
                  - Violations may result in immediate account termination
                </li>
                <li>
                  - Self-hosters operate independently under their own terms
                </li>
              </ul>
            </div>

            <div className="space-y-6 leading-relaxed text-[#37322f]/80">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  1. About the Service
                </h2>
                <p>
                  Notedrop is a free, open source note-taking application
                  licensed under the GNU Affero General Public License v3.0
                  (AGPL-3.0). The source code is publicly available at{" "}
                  <Link
                    href="https://github.com/Notedrop-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                  >
                    github.com/Notedrop-App
                  </Link>
                  .
                </p>
                <p>
                  These Terms apply only to the hosted instance at notedrop.app.
                  If you self-host Notedrop, these Terms do not apply — you are
                  responsible for your own terms and conditions.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  2. Eligibility
                </h2>
                <p>
                  You must be at least <strong>16 years old</strong> to use the
                  Service. By creating an account, you confirm that you meet
                  this requirement.
                </p>
                <p>
                  If you are using the Service on behalf of an organization, you
                  confirm that you have authority to bind that organization to
                  these Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  3. Your Account
                </h2>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keeping your account credentials secure</li>
                  <li>All activity that occurs under your account</li>
                  <li>
                    Ensuring the email address on your account is accurate and
                    accessible
                  </li>
                </ul>
                <p>
                  You must notify us immediately at{" "}
                  <a
                    href="mailto:contact@notedrop.app"
                    className="underline hover:opacity-70"
                  >
                    contact@notedrop.app
                  </a>{" "}
                  if you suspect unauthorized access to your account.
                </p>
                <p>
                  We reserve the right to reclaim usernames or account
                  identifiers that are inactive, misleading, or in violation of
                  these Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  4. Your Content
                </h2>
                <p>
                  <strong>You own your content.</strong> Notes, attachments,
                  tags, and any other data you create or upload remain entirely
                  yours. We claim no rights, licenses, or ownership over your
                  content whatsoever.
                </p>
                <p>
                  We do not access the content of notes protected by end-to-end
                  encryption. Other content may be processed as necessary to
                  operate and maintain the Service.
                </p>
                <p>We will never:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sell, share, or license your content to third parties</li>
                  <li>Use your content to train AI models</li>
                </ul>
                <p>
                  You can export or delete your data at any time. See our{" "}
                  <Link href="/privacy" className="underline hover:opacity-70">
                    Privacy Policy
                  </Link>{" "}
                  for details on data retention.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  5. Acceptable Use
                </h2>
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable law or regulation</li>
                  <li>
                    Store, distribute, or transmit content that is unlawful,
                    harmful, or infringes on the rights of others
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Service or its infrastructure
                  </li>
                  <li>Distribute malware, spam, or other harmful code</li>
                  <li>Impersonate another person or entity</li>
                  <li>
                    Scrape, crawl, or systematically extract data from the
                    Service without prior written permission
                  </li>
                  <li>
                    Circumvent or attempt to circumvent any security or access
                    control measures
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  6. Account Termination and Suspension
                </h2>
                <p>
                  <strong>By you:</strong> You may delete your account at any
                  time via the in-app settings. Upon deletion, your data is
                  removed as described in our{" "}
                  <Link href="/privacy" className="underline hover:opacity-70">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  <strong>Termination by us:</strong> We reserve the right to
                  terminate your account immediately and without prior notice
                  where we reasonably determine that you have violated these
                  Terms. Following termination for a Terms violation, you may
                  not re-register for the Service without our explicit
                  permission.
                </p>
                <p>
                  <strong>Suspension:</strong> We may suspend access to the
                  Service where reasonably necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prevent abuse or security risks</li>
                  <li>Investigate suspected violations</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  7. Service Availability
                </h2>
                <p>
                  We provide the Service on an{" "}
                  <strong>
                    &quot;as is&quot; and &quot;as available&quot;
                  </strong>{" "}
                  basis. We do not guarantee uninterrupted or error-free
                  operation of the Service.
                </p>
                <p>We may:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or discontinue features at any time</li>
                  <li>
                    Perform maintenance that temporarily affects availability
                  </li>
                  <li>
                    Shut down the hosted service with advance notice where
                    reasonably possible
                  </li>
                </ul>
                <p>
                  Because Notedrop is open source (AGPL-3.0), you retain access
                  to the codebase and can self-host the application regardless
                  of the status of the hosted service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  8. The Service is Free
                </h2>
                <p>
                  The hosted Service is provided free of charge. There are no
                  paid plans, subscriptions, or premium tiers. This will not
                  change — Notedrop is a FOSS project, not a commercial product.
                </p>
                <p>
                  We do not run ads, sell data, or monetize your usage in any
                  way.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  9. Service Scope
                </h2>
                <p>
                  The Service is provided as a general-purpose note-taking tool
                  and is not intended for the storage of critical, regulated, or
                  highly sensitive data. You are responsible for maintaining
                  backups of important information. The in-app export feature is
                  provided for this purpose.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  10. Open Source License
                </h2>
                <p>
                  The Notedrop software is licensed under the{" "}
                  <strong>
                    GNU Affero General Public License v3.0 (AGPL-3.0)
                  </strong>
                  . These Terms govern your use of the hosted Service only and
                  do not supersede or replace the AGPL-3.0 license as it applies
                  to the software itself.
                </p>
                <p>
                  A copy of the AGPL-3.0 license is available at{" "}
                  <Link
                    href="https://github.com/Notedrop-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                  >
                    github.com/Notedrop-App
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  11. Intellectual Property
                </h2>
                <p>
                  The Service, including its infrastructure, branding, and
                  design, is owned by us or our licensors. These Terms do not
                  grant you any rights to our trademarks, branding, or logos, or
                  to the hosted service infrastructure.
                </p>
                <p>
                  This does not affect your rights under the AGPL-3.0 license
                  for the open source software.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  12. Disclaimer of Warranties
                </h2>
                <p>
                  To the fullest extent permitted by applicable law, the Service
                  is provided <strong>without warranty of any kind</strong>,
                  express or implied, including but not limited to warranties of
                  merchantability, fitness for a particular purpose, or
                  non-infringement.
                </p>
                <p>We do not warrant that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Service will meet your specific requirements</li>
                  <li>
                    The Service will be uninterrupted, timely, or error-free
                  </li>
                  <li>Any data loss will not occur</li>
                </ul>
                <p>You are responsible for maintaining your own backups.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  13. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by applicable law, we shall
                  not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including loss of data,
                  arising from your use of or inability to use the Service.
                </p>
                <p>
                  Our total liability for any claim arising from these Terms or
                  the Service shall not exceed <strong>€50</strong>.
                </p>
                <p>
                  Nothing in these Terms excludes or limits liability that
                  cannot be excluded under applicable law (including Polish and
                  EU consumer protection law).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  14. Force Majeure
                </h2>
                <p>
                  We are not liable for any failure or delay in performance
                  resulting from events beyond our reasonable control, including
                  but not limited to infrastructure failures, natural disasters,
                  internet outages, or actions of third-party service providers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  15. Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of{" "}
                  <strong>Poland</strong> and, where applicable, European Union
                  law.
                </p>
                <p>
                  Any disputes shall be subject to the jurisdiction of the
                  courts of Poland. If you are a consumer resident in the EU,
                  you also retain the right to bring proceedings in the courts
                  of your country of residence.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  16. Severability
                </h2>
                <p>
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions will remain in full
                  force and effect.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  17. Waiver
                </h2>
                <p>
                  Our failure to enforce any provision of these Terms shall not
                  constitute a waiver of that provision.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  18. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time. For material
                  changes, we will provide notice (for example, via email or an
                  in-app notification) where reasonably possible before the
                  changes take effect.
                </p>
                <p>
                  Continued use of the Service after changes take effect
                  constitutes acceptance of the revised Terms.
                </p>
                <p>
                  Minor changes (such as clarifications or corrections) will be
                  reflected by updating the revision date at the top of this
                  page.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  19. Contact
                </h2>
                <p>If you have questions about these Terms:</p>
                <p>
                  <a
                    href="mailto:contact@notedrop.app"
                    className="underline hover:opacity-70 font-medium"
                  >
                    contact@notedrop.app
                  </a>
                </p>
                <p>
                  For privacy-related questions:{" "}
                  <a
                    href="mailto:privacy@notedrop.app"
                    className="underline hover:opacity-70"
                  >
                    privacy@notedrop.app
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
