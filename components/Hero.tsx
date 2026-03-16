import Image from "next/image";
import Link from "next/link";

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20demo";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-5xl font-extrabold uppercase leading-none tracking-tight text-blue-900 sm:text-6xl lg:text-7xl">
            PRIMEPOS
          </h1>
          <p className="mt-4 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
            Built for Malawi and Africa wholesale and retail operations
          </p>
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Run sales, stock, and staff across one shop or many from a single platform. PrimePOS
            helps businesses manage wholesale and retail outlets, bars and restaurants,
            pharmacies, and more while reducing stockouts, speeding up checkout, and improving
            daily decisions with live business data.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={whatsappBookDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Book Demo
            </Link>
            <Link
              href="/#pricing"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-blue-900 hover:text-blue-900"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition duration-300 hover:shadow-md">
          <Image
            src="/pos2.jpg"
            alt="PrimePOS dashboard preview"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
