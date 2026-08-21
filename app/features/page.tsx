import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const sections = [
  { number: "01", title: "Point of Sale", description: "A fast, cashier-friendly checkout for busy counters, built to keep the queue moving.", details: ["Fast checkout and barcode scanning", "Multiple payment methods and receipts", "Discounts, returns and offline selling"], image: "/pos.png" },
  { number: "02", title: "Inventory Management", description: "See exactly what is in stock, where it is, and what needs your attention before it becomes a problem.", details: ["Real-time stock levels and adjustments", "Low-stock alerts and multiple warehouses", "Product, movement and cost tracking"], image: "/inventory.png" },
  { number: "03", title: "Sales & Purchases", description: "Connect what you sell with what you buy, from the first quote to the final stock receipt.", details: ["Invoices, quotes and sales history", "Suppliers, purchase orders and bills", "Credit sales and receiving stock"], image: "/credit.png" },
  { number: "04", title: "Business Reports", description: "Finally see what is happening in your business with clear, timely numbers your team can act on.", details: ["Daily sales and gross profit", "Expenses, stock value and credit", "Best-selling products and trends"], image: "/sales insights.png" },
  { number: "05", title: "Multi-Branch Management", description: "Bring every outlet into one view. Compare performance, coordinate stock and keep standards consistent.", details: ["Central dashboard for every branch", "Branch-level sales and stock visibility", "Role-based access for local teams"], image: "/outlet.png" },
];

export default function FeaturesPage() {
  return (
    <>
      <Reveal>
        <section className="feature-hero py-24 text-white sm:py-32">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="eyebrow text-blue-200"><span className="status-dot" /> The PrimePOS platform</p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl">Everything you need to run your business.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">Sell faster. Control your stock. Manage customers. Understand your numbers.</p>
              <Link href="/#pricing" className="button-primary mt-9 bg-white text-blue-700 hover:bg-blue-50">See plans <span aria-hidden="true">→</span></Link>
            </div>
            <div className="feature-dashboard"><Image src="/dash.png" alt="PrimePOS dashboard overview" fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>
          </div>
        </section>
      </Reveal>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center"><p className="eyebrow justify-center"><span className="blue-dot" /> Connected by design</p><h2 className="section-title mt-5">One sale updates the whole business.</h2><p className="section-copy mx-auto mt-5">PrimePOS turns every transaction into a clearer view of stock, cash, customers and performance.</p></div>
          <div className="business-flow mt-14 grid gap-3 sm:grid-cols-4">{["SALE|Transaction completed", "STOCK|Inventory decreases", "CASH|Revenue increases", "REPORTS|Dashboard updates"].map((item) => { const [title, text] = item.split("|"); return <div key={title}><b>{title}</b><span>{text}</span></div>; })}</div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8 sm:space-y-32">
          {sections.map((section, index) => (
            <Reveal key={section.number} className={index % 2 ? "reveal-delay-200" : ""}>
              <article className={`feature-row grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="feature-shot"><Image src={section.image} alt={`${section.title} PrimePOS interface`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
                <div className="max-w-xl"><p className="eyebrow"><span className="blue-dot" /> {section.number} / PrimePOS module</p><h2 className="section-title mt-5">{section.title}</h2><p className="section-copy mt-5">{section.description}</p><ul className="feature-list mt-8">{section.details.map((detail) => <li key={detail}><span>✓</span>{detail}</li>)}</ul></div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="offline-band py-24"><div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"><p className="eyebrow justify-center text-blue-200"><span className="status-dot" /> 06 / Offline first</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">No internet? Keep selling.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Made for the way African businesses operate: resilient through outages, load shedding and unreliable connections.</p><div className="offline-flow mt-14 grid gap-4 sm:grid-cols-6">{["ONLINE", "INTERNET LOST", "OFFLINE MODE", "KEEP SELLING", "RESTORED", "SYNC COMPLETE ✓"].map((step, index) => <div key={step} className="flow-step"><span>0{index + 1}</span><strong>{step}</strong></div>)}</div></div></section>
      </Reveal>
    </>
  );
}
