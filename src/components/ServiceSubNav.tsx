import Link from "next/link";
import { SERVICES } from "@/data/services";

export default function ServiceSubNav({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="flex overflow-x-auto border-b border-gray-200 md:flex-wrap">
      {SERVICES.map((service) => (
        <Link
          key={service.slug}
          href={service.href}
          className={`shrink-0 whitespace-nowrap border-b-2 px-6 py-4 text-sm font-semibold transition md:flex-1 md:whitespace-normal md:text-center ${
            service.slug === currentSlug
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          {service.title}
        </Link>
      ))}
    </div>
  );
}
