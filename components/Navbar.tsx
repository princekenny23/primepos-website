import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#pricing", label: "Pricing" },
];

const whatsappBookDemoUrl =
  "https://wa.me/265997575865?text=Hi%20PrimePOS%2C%20I%20want%20to%20book%20a%20demo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-800 bg-blue-900 backdrop-blur">
      <nav className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="transition hover:opacity-90" aria-label="PrimePOS home">
          <Image src="/logo.png" alt="PrimePOS logo" width={260} height={76} className="h-16 w-auto" priority />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-blue-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={whatsappBookDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
          >
            Book Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
