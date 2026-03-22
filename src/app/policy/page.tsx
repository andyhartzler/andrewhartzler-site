import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Andrew Douglas Hartzler",
  description: "Privacy policy for Hartzler Financials and related services.",
};

export default function PolicyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-lg">
            Last updated: March 22, 2026
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-zinc-400 leading-relaxed">
              Hartzler Financials is a personal finance management application
              built by Andrew Hartzler. This privacy policy describes how the
              app collects, uses, and protects your information, including data
              accessed through Apple FinanceKit.
            </p>
          </section>

          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                When you use Hartzler Financials, the following data may be
                collected:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <span className="text-zinc-300 font-medium">
                    Financial transaction data
                  </span>{" "}
                  -- Transaction details such as merchant name, amount, date,
                  and category, accessed via Apple FinanceKit with your explicit
                  authorization.
                </li>
                <li>
                  <span className="text-zinc-300 font-medium">
                    Account information
                  </span>{" "}
                  -- Account names and balances used to provide an overview of
                  your finances.
                </li>
                <li>
                  <span className="text-zinc-300 font-medium">
                    Authentication data
                  </span>{" "}
                  -- Login credentials managed through secure authentication
                  providers.
                </li>
                <li>
                  <span className="text-zinc-300 font-medium">
                    Uploaded documents
                  </span>{" "}
                  -- Tax returns, receipts, and other files you choose to upload
                  for record-keeping.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">
              Apple FinanceKit Data
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                This app uses Apple FinanceKit to access your financial data
                stored on your device, such as Apple Card transactions. This
                access requires your explicit permission through system prompts
                provided by Apple.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  FinanceKit data is only accessed after you grant authorization.
                </li>
                <li>
                  Transaction data is synced to your personal Hartzler
                  Financials account for categorization, reporting, and
                  tax preparation.
                </li>
                <li>
                  Your financial data is never sold, shared with third parties,
                  or used for advertising purposes.
                </li>
                <li>
                  You can revoke FinanceKit access at any time through your
                  device settings.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">
              How We Use Your Data
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>Your data is used exclusively to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Display and categorize your financial transactions.</li>
                <li>Generate tax reports and financial summaries.</li>
                <li>
                  Store receipts and tax documents for your personal reference.
                </li>
                <li>
                  Provide insights into your spending and income patterns.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">
              Data Storage and Security
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Your data is stored securely using industry-standard practices:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  All data is transmitted over encrypted connections (HTTPS/TLS).
                </li>
                <li>
                  Data is stored in a secure, access-controlled database with
                  row-level security policies ensuring only you can access your
                  own data.
                </li>
                <li>
                  Uploaded files are stored in private storage buckets
                  accessible only to authenticated users.
                </li>
                <li>
                  Authentication is handled through secure, industry-standard
                  protocols.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Data Sharing</h2>
            <p className="text-zinc-400 leading-relaxed">
              Your financial data is never sold, rented, or shared with third
              parties for marketing or advertising. Data may only be disclosed
              if required by law or to protect against fraud.
            </p>
          </section>

          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Access, correct, or delete your personal data at any time.
                </li>
                <li>
                  Revoke FinanceKit access through your device settings.
                </li>
                <li>Request a copy of your stored data.</li>
                <li>Delete your account and all associated data.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have questions about this privacy policy or your data,
              please reach out via the{" "}
              <a
                href="/contact"
                className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors"
              >
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
