import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20free trial";

export default function Hero() {
  return (
    <Reveal>
      <section className="pt-20 pb-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
         
          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-blue-900 sm:text-6xl lg:text-7xl">
            Modern point-of-sale for All businesses.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-600">
          Prime Point of Sale is a business management software for fast sales transactions, stock control, and instant business reports in real time.

          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={whatsappBookDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Book a 30-day free trial
            </Link>
            <Link
              href="/features"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-blue-900 hover:text-blue-900"
            >
              Explore Features
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 shadow-sm transition duration-300 hover:shadow-md">
          <Image
            src="/pos2.png"
            alt="PrimePOS dashboard preview"
              width={1200}
              height={900}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
              className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
    </Reveal>
  );
}
