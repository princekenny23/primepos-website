import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Hero />

   <Reveal>
  <section className="py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center"><span className="blue-dot" /> POWERING SMART WHOLESALE & RETAIL BUSINESSES
        </p>

        <h2 className="section-title mt-5">
          Everything your business needs to stay in control.
        </h2>

        <p className="section-copy mx-auto mt-5">
          PrimePOS brings one platform for sales, stock, and customer management so African
          retailers can simplify operations, reduce shrinkage, and grow with confidence.
        </p>

        <div className="mt-8">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3"
          >
            View All PrimePOS Features →
          </Link>
        </div>
      </div>
    </div>
  </section>
</Reveal>

      <ProductShowcase />

      <Reveal className="reveal-delay-400">
        <section className="offline-band py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow justify-center text-blue-200"><span className="status-dot" /> Offline-first by design</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Internet down? Your business doesn&apos;t stop.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Keep selling through outages and load shedding. Every transaction waits safely, then syncs when you reconnect.</p>
            </div>

            <div className="offline-flow mt-14 grid gap-4 sm:grid-cols-4">
              {["ONLINE", "STILL SELLING", "SYNCING", "BACK ONLINE"].map((step, index) => <div key={step} className="flow-step"><span>0{index + 1}</span><strong>{step}</strong><small>{["Connected and ready", "No sale is lost", "Changes are queued", "Everything aligned ✓"][index]}</small></div>)}
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
              <article className="feature-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900/10 text-blue-900">
                  <span className="text-xl font-semibold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">No internet? Still works.</h3>
                <p className="mt-3 text-sm text-gray-600">
                  The POS runs fully offline. Sales queue locally and sync the moment you reconnect. Not one sale is ever lost — even during load shedding.
                </p>
              </article>

              <article className="feature-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900/10 text-blue-900">
                  <span className="text-xl font-semibold">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Know your numbers today</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Cash position and stock value update the moment you record a sale. No waiting for month end. No spreadsheet reconciliation.
                </p>
              </article>

              <article className="feature-card">
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
