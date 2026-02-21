const features = [
  {
    title: "Real Time Monitoring",
    description: "Track live sales, stock changes, and branch activity as they happen.",
  },
  {
    title: "Multi-Store Management",
    description: "Manage multiple branches from one centralized system with clear, real-time visibility across all locations.",
  },
  {
    title: "Stock Management",
    description: "Monitor item levels, stock movement, and low-stock alerts in real time.",
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Core Features</h2>
          <p className="mt-4 text-gray-600">Built for daily retail operations and growth.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                ✓
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
