import Image from "next/image";

const features = [
  {
    title: "Fast checkout",
    description: "Serve customers quickly with barcode scanning, receipts, and effortless payment management.",
  },
  {
    title: "Inventory control",
    description: "Track stock, manage reorder levels, and minimize out-of-stock and expired items across every location.",
  },
  {
    title: "Multi-location visibility",
    description: "Run a single store or multiple outlets with one dashboard and consistent controls.",
  },
  {
    title: "Sales insights",
    description: "Get clear reports for daily revenue, best sellers, and stock performance.",
  },
  {
    title: "Customer accounts",
    description: "Build loyalty with customer records, credit tracking, and tailored pricing.",
  },
  {
    title: "Trusted operations",
    description: "Secure, reliable software with a simple interface that staff can adopt fast.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-900">
              Core features
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything a modern business needs in one platform.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              PrimePOS is built for everyday business, pharmacies, Bars, and wholesalers who need a reliable point-of-sale and inventory management system.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <Image
                src="/pos3.png"
                alt="PrimePOS dashboard"
                width={1000}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
