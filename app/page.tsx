import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />

    

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              One system for sales, inventory, and control
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              PrimePOS connects front-of-store transactions with back-office operations in real
              time, so managers and owners always know what is selling, what is low in stock, and
              which outlet needs attention.
            </p>
          </div>
        </div>
      </section>

      <section id="features">
        <Features />
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why PrimePOS</h2>
            <p className="mt-4 text-gray-600">
              Designed for retail realities in Africa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 18h7V6H3v12Zm11 0h7v-7h-7v7Zm0-11h7V3h-7v4Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Single to Multi-Store</h3>
              <p className="mt-2 text-sm text-gray-600">
                Start with one store and scale to multiple locations effortlessly.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Affordable</h3>
              <p className="mt-2 text-sm text-gray-600">
                Clear, transparent pricing that grows with your business, not against your budget.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M13 10V3L4 14h7v7l9-11h-7Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Convenient</h3>
              <p className="mt-2 text-sm text-gray-600">
                Easy to set up, simple to use, and quick to get results with intuitive design.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 12h2m-11 1h10M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9Zm3 9.5c0 .83-.67 1.5-1.5 1.5S13 13.33 13 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Customer Credit</h3>
              <p className="mt-2 text-sm text-gray-600">
                Manage customer credit limits, track balances, and control outstanding payments.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Solutions by Business Type</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 10h18M5 6h14l2 12H3L5 6Zm4 4v4m4-4v4m4-4v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Grocery & Supermarkets</h3>
              <p className="mt-2 text-sm text-gray-600">
                High-volume checkout, barcode flow, and branch inventory visibility.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 12h6m-3-3v6M7 3h10l2 4v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7l2-4Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pharmacies</h3>
              <p className="mt-2 text-sm text-gray-600">
                Accurate item tracking, expiry-aware stock discipline, and controlled user roles.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 7h18M7 7v13m10-13v13M5 20h14M9 11h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Wholesale & Distribution</h3>
              <p className="mt-2 text-sm text-gray-600">
                Bulk order handling, supplier reconciliation, and branch transfer tracking.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Zm4 2h8m-8 4h5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Specialty Retail</h3>
              <p className="mt-2 text-sm text-gray-600">
                Variant-aware stock management and product-level profitability insights.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <CTA />
    </>
  );
}
