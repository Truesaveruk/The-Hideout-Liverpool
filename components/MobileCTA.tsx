"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/book") return null;

  const concierge = pathname === "/visiting-liverpool";

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-bone/10 bg-ember/90 p-3 backdrop-blur md:hidden">
      <Link
        href={concierge ? "/book?mode=concierge" : "/book"}
        className="btn-primary w-full"
      >
        {concierge ? "Book with collection" : "Book The Hideout"}
      </Link>
    </div>
  );
}
