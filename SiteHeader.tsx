"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/visiting-liverpool", label: "Visiting Liverpool" },
  { href: "/about", label: "About" },
  { href: "/prices", label: "Prices" },
  { href: "/gift", label: "Gift The Hideout" },
  { href: "/faq", label: "FAQ" }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-bone/10 bg-ember/90 backdrop-blur">
      {/* Mobile: centred logo, burger on the right */}
      <div className="relative flex items-center justify-center px-5 py-3 lg:hidden">
        <Link href="/" aria-label="The Hideout Liverpool — home">
          <Image
            src="/logo-header.png"
            alt="The Hideout Liverpool"
            width={1216}
            height={365}
            priority
            className="h-16 w-auto"
          />
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="absolute right-4 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className={`h-px w-6 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Desktop: big centred logo, nav centred underneath */}
      <div className="hidden flex-col items-center px-8 pb-5 pt-6 lg:flex">
        <Link href="/" aria-label="The Hideout Liverpool — home">
          <Image
            src="/logo-header.png"
            alt="The Hideout Liverpool"
            width={1216}
            height={365}
            priority
            className="h-24 w-auto"
          />
        </Link>
        <nav className="mt-6 flex items-center gap-8" aria-label="Main">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.16em] transition-colors hover:text-brass ${
                pathname === item.href ? "text-brass" : "text-bone/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary !px-6 !py-2.5">
            Book
          </Link>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 top-[89px] z-40 flex flex-col bg-ember px-6 pt-8 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`display border-b border-bone/10 py-4 text-3xl ${
                  pathname === item.href ? "text-brass" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/book" className="btn-primary mt-8 w-full">
            Book The Hideout
          </Link>
        </div>
      )}
    </header>
  );
}
