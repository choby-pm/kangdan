"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileContactBar() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white p-3 lg:hidden">
      <Link
        href="/contact"
        className="block rounded-full bg-gray-900 py-3 text-center font-semibold text-white"
      >
        상담신청
      </Link>
    </div>
  );
}
