import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/about", label: "사무소소개" },
  { href: "/services", label: "업무분야" },
  { href: "/cases", label: "해결사례" },
  { href: "/columns", label: "칼럼" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "상담신청" },
];

export default function NavBar() {
  return (
    <header className="border-b">
      <nav className="flex flex-wrap gap-4 p-4 text-sm">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
