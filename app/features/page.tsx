const businessFeatures = [
  {
    title: "Retail",
    points: [
      "Fast checkout and barcode scanning",
      "Discounts and promotions",
      "Receipts and invoicing",
      "Real-time inventory and low-stock alerts",
      "Multi-store management",
      "Customer profiles and purchase history",
      "Returns and exchange handling",
      "Sales and inventory reports",
    ],
  },
  {
    title: "Wholesale",
    points: [
      "Fast invoice and checkout flow",
      "Bulk pricing and customer-specific rates",
      "Purchase orders and supplier tracking",
      "High-volume stock movement control",
      "Discounts and negotiated pricing",
      "Receipts and invoicing",
      "Multi-store and warehouse visibility",
      "Sales and stock reports",
    ],
  },
  {
    title: "Bar & Restaurant",
    points: [
      "Fast counter checkout",
      "Table and tab management",
      "Split bills and waiter order tracking",
      "Kitchen order ticket flow",
      "Discounts and promotions",
      "Receipts and invoicing",
      "Real-time ingredient and item stock alerts",
      "Shift and cashier control",
    ],
  },
  {
    title: "Pharmacy",
    points: [
      "Fast checkout and barcode scanning",
      "Medicine inventory and batch tracking",
      "Expiry date alerts",
      "Fast medicine lookup at checkout",
      "Receipts and invoicing",
      "Real-time low-stock alerts",
      "Role-based access for staff",
      "Sales and stock reports",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Business Features</h1>
          <p className="mt-3 text-blue-100">Straight to the point: what PrimePOS does for your business.</p>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Business Features by Type</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessFeatures.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">{feature.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {feature.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

        
        </div>
      </section>
    </>
  );
}
