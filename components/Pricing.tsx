import Link from "next/link";
import Reveal from "@/components/Reveal";

const registerUrl = "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20free trial";
const allFeatures = [
  "Sales Invoicing & Quotes",
  "Point of Sale (POS)",
  "Inventory & Stock Tracking",
  "Purchases & Bills",
  "Financial Reports & Statements",
  "Full Audit Log",
];

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    caption: "A 30-day free trial with full access.",
    button: "Start free",
    metadata: { users: 5, branches: 1, warehouses: 1 },
    highlighted: false,
    trial: "30-day free trial included",
  },
  {
    name: "Starter",
    price: "MWK 60,000/mo",
    caption: "Perfect for small teams just getting started.",
    trial: "30-day free trial included",
    button: "Get started",
    metadata: { users: 5, branches: 1, warehouses: 1, storage: "1 GB" },
    highlighted: true,
  },
  {
    name: "Professional",
    price: "MWK 120,000/mo",
    caption: "For growing teams with advanced needs.",
    trial: "30-day free trial included",
    button: "Get started",
    metadata: { users: 25, branches: 2, warehouses: 1, storage: "2 GB" },
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "MWK 240,000/mo",
    caption: "Unlimited scale with dedicated support.",
    trial: "30-day free trial included",
    button: "Get started",
    metadata: { users: 999, branches: 2, warehouses: 2, storage: "5 GB" },
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl text-gray-900">Priced in Kwacha.</h1>
          <p className="mt-6 text-lg text-gray-600">All plans are priced in MWK. Start with a 30-day free trial.</p>
        </div>

        <Reveal className="reveal-delay-200">
          <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden border ${
                  plan.highlighted ? "border-blue-900 shadow-xl ring-2 ring-blue-900" : "border-gray-200"
                }`}
              >
              {plan.highlighted && (
                <div className="bg-blue-900 px-4 py-2 text-center text-xs font-bold tracking-[0.2em] uppercase text-white">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{plan.caption}</p>

                <div className="mt-6 space-y-1">
                  <p className="text-4xl font-bold text-gray-900">{plan.price}</p>
                  {plan.trial && <p className="text-sm font-semibold text-blue-900">{plan.trial}</p>}
                </div>

                <Link
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-blue-900 text-white hover:bg-blue-800"
                      : "bg-slate-100 text-gray-900 hover:bg-slate-200"
                  }`}
                >
                  {plan.button}
                </Link>

                <div className="mt-8 space-y-3 border-t border-gray-200 pt-8">
                  <div className="space-y-2">
                    {Object.entries(plan.metadata).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="capitalize text-gray-600">{key}</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 pt-4">
                    {allFeatures.map((feature) => (
                      <li key={`${plan.name}-${feature}`} className="flex gap-3 text-sm text-gray-700">
                        <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-blue-900 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
          </div>
        </Reveal>

        <div className="mt-20 rounded-2xl border border-gray-200 bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Every plan. Every module.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            We don&apos;t lock features behind higher tiers. Every plan gives you the full PrimePOS platform — point of sale, inventory, purchases, and reports.
          </p>
        </div>
      </div>
    </section>
  );
}

