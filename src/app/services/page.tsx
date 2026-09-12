import type { Metadata } from "next";
import Link from "next/link";

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

const SERVICES = [
  { href: "/services/unfair-dismissal", label: "부당해고·부당징계" },
  { href: "/services/wage-dispute", label: "임금체불·퇴직금" },
  { href: "/services/workplace-harassment", label: "직장 내 괴롭힘·성희롱" },
  { href: "/services/industrial-accident", label: "산업재해" },
  { href: "/services/labor-committee", label: "노동위원회 대응" },
];

export default function ServicesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">업무분야</h1>
      <ul className="mt-4 space-y-2">
        {SERVICES.map((service) => (
          <li key={service.href}>
            <Link href={service.href}>{service.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
