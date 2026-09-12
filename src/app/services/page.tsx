import Link from "next/link";

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
