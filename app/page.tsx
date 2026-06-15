import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-900">
                Retail technology for Africa
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Built for fast checkout, inventory control, and better business decisions.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                PrimePOS brings one platform for sales, stock, and customer management so African
                retailers can simplify operations, reduce shrinkage, and grow with confidence.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal-delay-200">
        <section id="features">
          <div className="mt-10 flex justify-center">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/features"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-blue-900 hover:text-blue-900"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal-delay-400">
        <section className="py-20 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-900">
                Why businesses choose Prime Point of Sale
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
              <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900/10 text-blue-900">
                  <span className="text-xl font-semibold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">No internet? Still works.</h3>
                <p className="mt-3 text-sm text-gray-600">
                  The POS runs fully offline. Sales queue locally and sync the moment you reconnect. Not one sale is ever lost — even during load shedding.
                </p>
              </article>

              <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900/10 text-blue-900">
                  <span className="text-xl font-semibold">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Know your numbers today</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Cash position and stock value update the moment you record a sale. No waiting for month end. No spreadsheet reconciliation.
                </p>
              </article>

              <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900/10 text-blue-900">
                  <span className="text-xl font-semibold">🏬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">One platform for all outlets</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Manage one store or many locations from a single system with consistent controls.
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <section id="pricing">
        <Pricing />
      </section>

      <CTA />
    </>
  );
}
