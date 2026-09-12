"use client";

import { useState } from "react";
import Link from "next/link";
import type { ServiceInfo } from "@/data/services";

export default function ServicesTabs({ services }: { services: ServiceInfo[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div>
      <div className="flex overflow-x-auto border-b border-gray-200 md:flex-wrap">
        {services.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            className={`shrink-0 whitespace-nowrap border-b-2 px-6 py-4 text-sm font-semibold transition md:flex-1 md:whitespace-normal ${
              index === activeIndex
                ? "border-black text-black"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex min-w-0 flex-1 flex-col md:w-1/2">
            <div>
              <Link href={active.href} className="text-lg font-bold text-black hover:underline">
                {active.title}
              </Link>
              <p className="mt-2 text-sm text-gray-500">{active.description}</p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block self-start rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 md:mt-auto"
            >
              상담 신청하기
            </Link>
          </div>

          <div className="flex min-w-0 flex-col gap-2 md:w-1/2">
            {active.faq.slice(0, 3).map((item) => (
              <Link
                key={item.question}
                href={`${active.href}#faq`}
                className="block truncate rounded-md border border-gray-300 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 md:overflow-visible md:text-clip md:whitespace-normal"
              >
                Q. {item.question}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
