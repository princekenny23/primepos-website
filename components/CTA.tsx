import Link from "next/link";

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20demo";

export default function CTA() {
  return (
    <section id="book-demo" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-blue-900 px-8 py-16 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to run retail operations with more control and less guesswork?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Join modern retail teams using PrimePOS to improve speed, visibility, and
            profitability.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={whatsappBookDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-gray-200"
            >
              Book Demo
            </Link>
            <Link
              href="/#pricing"
              className="rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-blue-900"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
