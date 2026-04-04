import { Header } from "@/components/ui/header";
import Link from "next/link";

export default function PrivacyPage() {
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
                  GDPR Compliant
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#37322f]">
                Privacy Policy
              </h1>
              <p className="text-sm text-[#37322f]/70">
                <strong>Effective:</strong> January 2026 |{" "}
                <strong>Last updated:</strong> April 2026
              </p>
              <p className="text-[#37322f]/80 leading-relaxed">
                Notedrop is built with a strong focus on privacy and data
                minimization. This policy explains what data is collected, why
                it is collected, and how it is handled in compliance with the
                General Data Protection Regulation (GDPR).
              </p>
            </div>

            <div className="bg-[#f5f3f0] border border-[#e0dedb] rounded-lg p-6 space-y-3">
              <h3 className="font-bold text-[#37322f]">TL;DR</h3>
              <ul className="space-y-2 text-[#37322f]/80 text-sm">
                <li>
                  - We collect only what is necessary to provide the service
                </li>
                <li>- No tracking, no analytics, no ads</li>
                <li>
                  - Your notes are private by design — private notes are
                  end-to-end encrypted and we cannot access their content
                </li>
                <li>
                  - AI features run locally in your browser (no data leaves your
                  device)
                </li>
                <li>- You can export or delete your data at any time</li>
                <li>
                  - Self-hosting means you are fully in control of your data
                </li>
              </ul>
            </div>

            <div className="space-y-6 leading-relaxed text-[#37322f]/80">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  1. Data Controller
                </h2>
                <p>
                  <strong>Controller:</strong> Bartosz Krawczyk (individual
                  developer, Poland)
                </p>
                <p>Contact:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Privacy:{" "}
                    <a
                      href="mailto:privacy@notedrop.app"
                      className="underline hover:opacity-70"
                    >
                      privacy@notedrop.app
                    </a>
                  </li>
                  <li>
                    General:{" "}
                    <a
                      href="mailto:contact@notedrop.app"
                      className="underline hover:opacity-70"
                    >
                      contact@notedrop.app
                    </a>
                  </li>
                </ul>
                <p>
                  We do not publicly list a personal home address for privacy
                  reasons. Additional contact details may be provided upon
                  request where legally required.
                </p>
                <p>
                  We are not required to appoint a Data Protection Officer under
                  Article 37 GDPR.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  2. What Data We Collect
                </h2>

                <h3 className="text-xl font-semibold text-[#37322f]">
                  Data You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account information:</strong> email address,
                    password hash, OAuth tokens (if used)
                  </li>
                  <li>
                    <strong>Content:</strong> notes, attachments, tags, folders
                  </li>
                  <li>
                    <strong>Settings:</strong> preferences and configuration
                  </li>
                  <li>
                    <strong>Communications:</strong> emails, support requests,
                    feedback
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#37322f]">
                  Data Collected Automatically
                </h3>
                <p>
                  We collect only minimal technical data required to operate the
                  service:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Server logs:</strong> requested route, HTTP status
                    code, and IP address (retained only as long as necessary for
                    security and operational purposes; not used for tracking or
                    profiling)
                  </li>
                  <li>
                    <strong>Session data:</strong> authentication tokens
                  </li>
                  <li>
                    <strong>Error reports:</strong> anonymized technical error
                    information
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#37322f]">
                  What We Do NOT Collect
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tracking or analytics data</li>
                  <li>Behavioral profiles</li>
                  <li>Advertising identifiers</li>
                  <li>Device fingerprinting</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  3. Why We Process Data (Legal Basis)
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-[#e0dedb] text-sm">
                    <thead>
                      <tr className="bg-[#f5f3f0]">
                        <th className="border border-[#e0dedb] p-3 text-left font-semibold text-[#37322f]">
                          Data
                        </th>
                        <th className="border border-[#e0dedb] p-3 text-left font-semibold text-[#37322f]">
                          Purpose
                        </th>
                        <th className="border border-[#e0dedb] p-3 text-left font-semibold text-[#37322f]">
                          Legal Basis
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#37322f]/80">
                      <tr>
                        <td className="border border-[#e0dedb] p-3">
                          Account data
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Provide login and account access
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Contract (Art. 6(1)(b))
                        </td>
                      </tr>
                      <tr className="bg-[#faf9f7]">
                        <td className="border border-[#e0dedb] p-3">
                          Notes/content
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Provide core functionality
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Contract (Art. 6(1)(b))
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#e0dedb] p-3">
                          Minimal logs
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Ensure stability and security
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Legitimate interest (Art. 6(1)(f))
                        </td>
                      </tr>
                      <tr className="bg-[#faf9f7]">
                        <td className="border border-[#e0dedb] p-3">
                          Support emails
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Respond to inquiries
                        </td>
                        <td className="border border-[#e0dedb] p-3">
                          Legitimate interest (Art. 6(1)(f))
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>We may also process personal data where necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with legal obligations (Art. 6(1)(c) GDPR)</li>
                  <li>
                    Establish, exercise, or defend legal claims (Art. 6(1)(f)
                    GDPR)
                  </li>
                </ul>

                <p>
                  <strong>Legitimate interest justification:</strong> We process
                  only minimal technical data strictly necessary to ensure
                  service functionality and security. We have assessed that our
                  legitimate interests are not overridden by your rights and
                  freedoms, given the limited scope of data processing and
                  absence of tracking or profiling.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  4. AI Features
                </h2>
                <p>
                  Notedrop provides optional AI-powered features that run
                  entirely <strong>locally in your browser</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    All processing happens on your device using client-side
                    models (e.g., via Transformers.js)
                  </li>
                  <li>
                    No note content is sent to our servers for AI processing
                  </li>
                  <li>
                    We do not store, access, or transmit AI inputs or outputs
                  </li>
                </ul>
                <p>
                  AI features are activated only when you explicitly use them.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  4A. End-to-End Encryption
                </h2>
                <p>
                  Notedrop supports optional end-to-end encryption (E2EE) for
                  private notes.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    When a note is marked as <strong>private</strong>, it is
                    encrypted on your device before being sent to our servers
                  </li>
                  <li>
                    We store only encrypted data and{" "}
                    <strong>cannot access the plaintext content</strong> of
                    these notes
                  </li>
                  <li>
                    Decryption occurs locally in your browser using your
                    encryption keys
                  </li>
                </ul>
                <p>
                  <strong>For public notes:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Content is not end-to-end encrypted</li>
                  <li>
                    It is protected using standard security measures (encryption
                    in transit and at rest)
                  </li>
                  <li>
                    We may process this content as necessary to provide the
                    Service
                  </li>
                </ul>
                <p>
                  For end-to-end encrypted data, we may be unable to provide
                  access to plaintext content in response to data access
                  requests, as we do not possess the decryption keys.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  5. Data Sharing
                </h2>
                <p>
                  We do not sell or share your data for marketing or
                  advertising.
                </p>
                <p>We only share data with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Infrastructure providers:</strong> We use
                    third-party hosting providers to operate the service. A
                    current list of infrastructure providers is maintained at{" "}
                    <Link
                      href="/legal/subprocessors"
                      className="underline hover:opacity-70"
                    >
                      notedrop.app/legal/subprocessors
                    </Link>
                    . All subprocessors are contractually bound by Data
                    Processing Agreements and may only process personal data on
                    our documented instructions and in accordance with GDPR.
                  </li>
                  <li>
                    <strong>Legal authorities:</strong> Only where required by
                    applicable law or valid legal process
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  6. Data Storage and Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption in transit (TLS 1.3)</li>
                  <li>Encryption at rest (database-level)</li>
                  <li>
                    End-to-end encryption for private notes (we cannot access
                    plaintext)
                  </li>
                  <li>Encrypted backups</li>
                  <li>Access controls (minimal access principle)</li>
                </ul>
                <p>
                  Content is processed automatically by our systems and is not
                  accessed in human-readable form except where strictly
                  necessary, such as for security incidents, abuse prevention,
                  or compliance with legal obligations.
                </p>
                <p>
                  Data is hosted within the European Economic Area (EEA),
                  specifically in data centers located in the Netherlands.
                </p>
                <p>
                  No system is completely secure, but we follow industry best
                  practices to minimize risks.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  7. International Data Transfers
                </h2>
                <p>
                  We primarily store and process data within the European
                  Economic Area (EEA).
                </p>
                <p>
                  If any processing involves transfers outside the EEA,
                  appropriate safeguards such as Standard Contractual Clauses
                  (SCCs) are used.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  8. Data Retention
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Notes and account data:</strong> retained until
                    account deletion
                  </li>
                  <li>
                    <strong>Support communications:</strong> up to 2 years after
                    last contact
                  </li>
                  <li>
                    <strong>Server logs:</strong> limited, provider-defined
                    retention
                  </li>
                  <li>
                    <strong>Backups:</strong> deleted within 90 days
                  </li>
                </ul>
                <p>
                  <strong>When you delete your account:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Active data is deleted within 24 hours</li>
                  <li>Backups are deleted within 90 days</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  9. Your Rights (GDPR)
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your data (Art. 15)</li>
                  <li>Rectify inaccurate data (Art. 16)</li>
                  <li>Erase your data (Art. 17)</li>
                  <li>Restrict processing (Art. 18)</li>
                  <li>
                    Data portability (Art. 20) — exports are provided in a
                    structured, commonly used, and machine-readable format
                  </li>
                  <li>Object to processing (Art. 21)</li>
                </ul>
                <p>
                  <strong>To exercise your rights:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use in-app tools, or</li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:privacy@notedrop.app"
                      className="underline hover:opacity-70"
                    >
                      privacy@notedrop.app
                    </a>
                  </li>
                </ul>
                <p>We respond within 30 days.</p>
                <p>
                  You also have the right to lodge a complaint with your local
                  data protection authority within the EU. In Poland, this is
                  UODO.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  10. Automated Decision-Making
                </h2>
                <p>
                  We do not use automated decision-making or profiling that
                  produces legal or similarly significant effects on users
                  within the meaning of Article 22 GDPR.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  11. Cookies
                </h2>
                <p>We use only strictly necessary cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Session cookie (authentication) — deleted when you close
                    your browser
                  </li>
                  <li>CSRF token (security)</li>
                </ul>
                <p>
                  These cookies are essential for the operation of the service
                  and do not require consent under applicable EU regulations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  12. Use of Sensitive Data
                </h2>
                <p>
                  The Service is not intended for the storage of highly
                  sensitive personal data, such as health information, financial
                  credentials, or other categories of data requiring enhanced
                  protection. Users are responsible for determining the
                  appropriateness of the Service for their specific use cases.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  13. Children
                </h2>
                <p>
                  Notedrop is intended only for users aged{" "}
                  <strong>16 or older</strong>.
                </p>
                <p>
                  We do not knowingly collect data from individuals under 16.
                  Age is self-declared at registration. If we identify or are
                  notified that an account belongs to someone under 16, we will
                  delete that account and its associated data promptly. If you
                  believe an underage account exists, please contact{" "}
                  <a
                    href="mailto:privacy@notedrop.app"
                    className="underline hover:opacity-70"
                  >
                    privacy@notedrop.app
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  14. Self-Hosting
                </h2>
                <p>If you self-host Notedrop:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You act as the independent data controller for any data
                    processed through your instance
                  </li>
                  <li>
                    This privacy policy applies only to the hosted service at
                    notedrop.app and does not extend to self-hosted deployments
                  </li>
                  <li>
                    You are solely responsible for your own GDPR compliance,
                    including maintaining a privacy policy for your users,
                    handling data subject requests, and managing data security
                  </li>
                  <li>
                    Resources on GDPR obligations for data controllers are
                    available from your national supervisory authority (e.g.,{" "}
                    <Link
                      href="https://uodo.gov.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70"
                    >
                      UODO
                    </Link>{" "}
                    for Poland, or the{" "}
                    <Link
                      href="https://edpb.europa.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70"
                    >
                      EDPB
                    </Link>{" "}
                    for general EU guidance)
                  </li>
                </ul>
                <p>
                  Because Notedrop is free and open source software,
                  self-hosters retain full access to the codebase and can
                  operate their instances independently of this service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  15. Service Continuity
                </h2>
                <p>
                  Notedrop is developed and maintained by an individual
                  developer. In the event that the hosted service at
                  notedrop.app is discontinued:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Users will be given advance notice where possible</li>
                  <li>
                    In-app data export tools will remain accessible during any
                    wind-down period to allow you to retrieve your data
                  </li>
                </ul>
                <p>
                  Because Notedrop is free and open source software, the
                  codebase remains publicly available for anyone to self-host or
                  fork, ensuring long-term continuity of the project independent
                  of this hosted instance.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  16. Data Breaches
                </h2>
                <p>In the event of a personal data breach, we will:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Notify the relevant supervisory authority{" "}
                    <strong>within 72 hours</strong> where required under GDPR
                  </li>
                  <li>
                    Inform affected users without undue delay where there is a
                    high risk to their rights and freedoms
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  17. Changes to This Policy
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Material changes:</strong> advance notice where
                    possible
                  </li>
                  <li>
                    <strong>Minor changes:</strong> updated revision date
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-[#37322f]">
                  18. Contact
                </h2>
                <p>If you have questions about this policy:</p>
                <p>
                  <a
                    href="mailto:privacy@notedrop.app"
                    className="underline hover:opacity-70 font-medium"
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
