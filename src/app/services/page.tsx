import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "업무분야 | 노동법률사무소 강단",
  description:
    "부당해고·부당징계, 임금체불·퇴직금, 직장 내 괴롭힘·성희롱, 산업재해, 노동위원회 대응까지 노동법률사무소 강단의 업무분야를 안내합니다.",
  keywords: [
    "노동법률사무소 업무분야",
    "부당해고",
    "임금체불",
    "직장 내 괴롭힘",
    "산업재해",
    "노동위원회",
  ],
};

export default function ServicesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">업무분야</h1>

      <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-6">
        {SERVICES.map((service) => (
          <div key={service.slug} className="w-full rounded-lg border border-gray-200 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex items-start gap-4 md:w-1/2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl">
                  {service.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <Link href={service.href} className="text-xl font-bold text-black hover:underline">
                    {service.title}
                  </Link>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>

              <div className="flex min-w-0 flex-col gap-2 md:w-1/2">
                {service.faq.slice(0, 3).map((item) => (
                  <Link
                    key={item.question}
                    href={`${service.href}#faq`}
                    scroll={false}
                    className="block truncate rounded-md border border-gray-300 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 md:overflow-visible md:text-clip md:whitespace-normal"
                  >
                    Q. {item.question}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
