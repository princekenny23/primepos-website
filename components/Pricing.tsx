import Link from "next/link";

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20demo";

const plans = [
  {
    name: "Starter",
    price: "MK 15,000 / month",
    subtitle: "Best for single-store businesses starting digital operations.",
    features: ["1 POS terminal", "Sales and stock management", "Sales reports", "Full support"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "MK 30,000 / month",
    subtitle: "Best for growing retailers managing multiple teams.",
    features: [
      "Up to 2 POS terminals",
      "Multi-user ",
      "inventory and purchase management", 
      "Full support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    subtitle: "Best for chains and high-volume operations.",
    features: [
      "Unlimited terminals and outlets",
      "Centralized control dashboard",
      "Dedicated onboarding and training",
      "Custom integrations and support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Pricing</h2>
          <p className="mt-4 text-gray-600">Clear plans built for different stages of retail growth.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.highlighted ? "border-2 border-blue-900" : "border border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-3xl font-bold text-gray-900">{plan.price}</p>
              <p className="mt-3 text-sm text-gray-600">{plan.subtitle}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={whatsappBookDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
