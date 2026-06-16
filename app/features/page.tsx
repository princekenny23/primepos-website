import Image from "next/image";
import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Point of Sale",
    description:
      "Fast checkout with barcode scanning, receipts, split payments, and cash management in one intuitive interface.",
    details: [
      "Quick product lookup and barcode scanning",
      "Flexible payment methods and receipts",
      "Cashier-friendly layout for faster service",
    ],
    image: "/pos.png",
  },
  {
    title: "Reports & insights",
    description:
      "Track sales, stock movement, cashier performance, and store results with clear reports and export-ready summaries.",
    details: [
      "Daily, weekly and monthly sales reports",
      "Inventory movement and stock alerts",
      "Simple export for accounting and management",
    ],
    image: "/sales insights.png",
  },
  {
    title: "Customer credit",
    description:
      "Create customer accounts, manage credit limits, track balances, and collect payments with built-in credit control.",
    details: [
      "Customer profiles with credit terms",
      "Outstanding balance tracking",
      "Payment collection at checkout",
    ],
    image: "/credit.png",
  },
  {
    title: "Multi-branch management",
    description:
      "Run multiple outlets from one dashboard, sync inventory across stores, and manage users with consistent controls.",
    details: [
      "Centralized inventory and stock sync",
      "Store-level performance reports",
      "Role-based access for branch teams",
    ],
    image: "/outlet.png",
  },
  {
    title: "Tab management for bars",
    description:
      "Open, track, and settle bar tabs with a fast POS workflow built for busy venues.",
    details: [
      "Create and manage drink tabs",
      "Track tab orders in real time",
      "Close tabs quickly and securely",
    ],
    image: "/tab.png",
  },
  {
    title: "Table management",
    description:
      "Assign tables, manage seating, and coordinate orders from one intuitive service board.",
    details: [
      "Floor plans and table status",
      "Assign orders to tables instantly",
      "Optimize seating for busy shifts",
    ],
    image: "/table.png",
  },

  {
  title: "Profit & Loss Reporting",
  description:
    "Monitor business performance with detailed profit, revenue, and expense reports in real time.",
  details: [
    "Track sales, expenses, and profits",
    "Generate daily, weekly, and monthly reports",
    "Make data-driven business decisions",
  ],
  image: "/profit.png",
},
{
  title: "Inventory Management",
  description:
    "Keep stock levels accurate, track product movements, and prevent stock shortages with automated inventory tools.",
  details: [
    "Real-time stock tracking",
    "Low-stock alerts and notifications",
    "Inventory adjustments and stock history",
  ],
  image: "/inventory.png",
},
  
];

export default function FeaturesPage() {
  return (
    <>
      <Reveal>
        <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20 text-white">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Everything a modern business needs in one platform.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-blue-100">
                PrimePOS is built for everyday business one platform for fast sales checkout, real-time insights, customer credit and multi-store control.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">POS</p>
                  <p className="mt-3 text-sm text-blue-100">Checkout, payments and stock updates in one smooth workflow.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">Customer credit</p>
                  <p className="mt-3 text-sm text-blue-100">Credit accounts, balance tracking and payment collection built in.</p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/dash.png"
                    alt="PrimePOS dashboard screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal className="reveal-delay-200">
        <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} screenshot`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-900">
                    {feature.title}
                  </p>
                  <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{feature.title}</h2>
                  <p className="mt-6 max-w-xl text-lg text-gray-600">{feature.description}</p>
                  <ul className="mt-8 space-y-4 text-gray-700">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-blue-900"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>
    </>
  );
}
