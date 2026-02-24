import Link from "next/link";

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20demo";

export default function Footer() {
  return (
    <footer className="bg-blue-900 py-14 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-bold">PrimePOS</h3>
          <p className="mt-3 max-w-sm text-gray-200">
            Powering smarter retail operations across Africa.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-200">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/#features" className="transition hover:text-gray-200">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#solutions" className="transition hover:text-gray-200">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="transition hover:text-gray-200">
                Pricing
              </Link>
            </li>
          
            <li>
              <Link href={whatsappBookDemoUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-200">
                Book Demo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-200">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-100">
            <li>Email: kwitondakenny@gmail.com</li>
            <li>Phone: +265 997575865/881302440</li>
            <li>Lilongwe, Malawi</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-blue-800 px-4 pt-6 text-sm text-gray-200 sm:px-6 lg:px-8">
        © 2026 Primex LTD. All rights reserved.
      </div>
    </footer>
  );
}
