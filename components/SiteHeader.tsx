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
    <header className="sticky top-0 z-40 border-b border-bone/10 bg-ember/85 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <Link href="/" aria-label="The Hideout Liverpool — home">
          <Image
            src="/logo-header.png"
            alt="The Hideout Liverpool"
            width={1216}
            height={365}
            priority
            className="h-14 w-auto md:h-[76px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.14em] transition-colors hover:text-brass ${
                pathname === item.href ? "text-brass" : "text-bone/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary !px-5 !py-2.5">
            Book
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[65px] z-40 flex flex-col bg-ember px-6 pt-8 lg:hidden">
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
