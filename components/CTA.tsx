import Link from "next/link";
import Reveal from "@/components/Reveal";

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20free trial";

export default function CTA() {
  return (
    <Reveal className="reveal-delay-200">
      <section id="book-demo" className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-16 text-center text-white shadow-2xl shadow-blue-950/20 sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            See PrimePOS in action and get your team ready to sell smarter.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Book a 30-day free trial today and discover how your business can reduce checkout time, improve stock
            visibility, and keep every location aligned.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={whatsappBookDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary bg-white text-blue-700 hover:bg-blue-50"
            >
              Book a 30-day free trial
            </Link>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
