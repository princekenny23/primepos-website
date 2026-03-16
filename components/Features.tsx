import Image from "next/image";

const features = [
  {
    title: "Real Time Monitoring",
    description: "Track live sales, stock changes, and branch activity as they happen.",
  },
  {
    title: "Multi-Store Management",
    description: "Manage multiple shops from one centralized platform, including wholesale and retail stores, bars and restaurants, pharmacies, and more.",
  },
  {
    title: "Stock Management",
    description: "Monitor item levels, stock movement, expiries, and low-stock alerts in real time.",
  },
  {
    title: "Bill and Invoice Monitoring",
    description: "Keep control of bills and invoices with accurate status tracking.",
  },
  {
    title: "Tracking Expenses",
    description: "Record and monitor daily operating expenses across your business.",
  },
  {
    title: "Reporting",
    description: "Generate clear reports for sales, stock, and business performance.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Image
              src="/pos3.jpg"
              alt="PrimePOS dashboard"
              width={1000}
              height={900}
              className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-sm"
              priority
            />
          </div>

          <div className="order-1 text-left lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Core Features</h2>
            <p className="mt-4 text-gray-600">Built for daily retail operations and growth.</p>

            <ul className="mt-12 space-y-6">
              {features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
