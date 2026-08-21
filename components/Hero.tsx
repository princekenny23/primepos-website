import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20free trial";

export default function Hero() {
  return (
    <Reveal>
      <section className="hero-grid overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative z-10">
            <div className="eyebrow"><span className="status-dot" /> Built for African retail</div>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-navy sm:text-6xl lg:text-7xl">
              Run your business. <span className="text-gradient">Know your numbers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              PrimePOS connects every sale, stock movement, and outlet report in one calm, reliable workspace. Even when the internet does not cooperate.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={whatsappBookDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Start your free trial <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/features"
              className="button-secondary"
            >
              Explore the platform <span aria-hidden="true">→</span>
            </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500">
              <span>✓ 30-day free trial</span><span>✓ No credit card</span><span>✓ Local support</span>
            </div>
          </div>

          <div className="dashboard-stage">
            <div className="dashboard-glow" />
            <div className="dashboard-window">
              <div className="dashboard-bar"><div className="window-dots"><i /><i /><i /></div><span>primepos / overview</span><b>•••</b></div>
              <Image src="/dash.png" alt="PrimePOS dashboard showing sales and stock performance" width={1200} height={760} className="h-auto w-full" priority />
            </div>
            <div className="floating-kpi kpi-sales"><span className="kpi-icon">↗</span><div><small>Today&apos;s sales</small><strong>MWK 4.82M</strong><em>+18.4%</em></div></div>
            <div className="floating-kpi kpi-stock"><span className="kpi-icon stock-icon">!</span><div><small>Stock alert</small><strong>12 products</strong><em className="warning">Need attention</em></div></div>
          </div>
        </div>
    </section>
    </Reveal>
  );
}
