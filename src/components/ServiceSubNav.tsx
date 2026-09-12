"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/data/services";

export default function ServiceSubNav({ currentSlug }: { currentSlug: string }) {
  const router = useRouter();

  return (
    <div>
      <div className="md:hidden">
        <select
          value={currentSlug}
          onChange={(e) => router.push(`/services/${e.target.value}`)}
          aria-label="업무분야 선택"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-black outline-none focus:border-black"
        >
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden border-b border-gray-200 md:flex">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className={`flex-1 border-b-2 px-6 py-4 text-center text-sm font-semibold transition ${
              service.slug === currentSlug
                ? "border-black text-black"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
