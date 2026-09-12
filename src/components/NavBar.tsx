"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { href: "/about", label: "대표노무사" },
  {
    href: "/services",
    label: "업무분야",
    children: [
      { href: "/services/unfair-dismissal", label: "부당해고·부당징계" },
      { href: "/services/wage-dispute", label: "임금체불·퇴직금" },
      { href: "/services/workplace-harassment", label: "직장 내 괴롭힘·성희롱" },
      { href: "/services/industrial-accident", label: "산업재해" },
      { href: "/services/labor-committee", label: "노동위원회 대응" },
    ],
  },
  { href: "/cases", label: "해결사례" },
  { href: "/location", label: "오시는 길" },
];

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isItemActive(pathname: string, item: NavItem) {
  if (isPathActive(pathname, item.href)) return true;
  return item.children?.some((child) => isPathActive(pathname, child.href)) ?? false;
}

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenAccordion(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/images/logo2.png"
            alt="노동법률사무소 강단"
            width={660}
            height={108}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-6 text-sm">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`py-2 ${
                    isItemActive(pathname, item)
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
                <div className="absolute left-0 top-full hidden min-w-max flex-col rounded-md border bg-white py-2 shadow-lg group-hover:flex">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="whitespace-nowrap px-4 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isItemActive(pathname, item)
                    ? "font-semibold text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="rounded-full bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-700"
          >
            상담신청
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="메뉴 열기"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-gray-900" />
          <span className="block h-0.5 w-6 bg-gray-900" />
          <span className="block h-0.5 w-6 bg-gray-900" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="absolute inset-x-0 top-full border-t bg-white px-4 pb-4 text-sm shadow-lg lg:hidden">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.href} className="border-b">
                <div className="flex w-full items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 py-3 ${
                      isItemActive(pathname, item) ? "font-semibold" : "text-gray-700"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="px-2 py-3"
                    onClick={() =>
                      setOpenAccordion((prev) => (prev === item.href ? null : item.href))
                    }
                    aria-expanded={openAccordion === item.href}
                    aria-label={
                      openAccordion === item.href ? "하위 메뉴 닫기" : "하위 메뉴 열기"
                    }
                  >
                    <span aria-hidden>{openAccordion === item.href ? "−" : "+"}</span>
                  </button>
                </div>
                {openAccordion === item.href && (
                  <div className="flex flex-col gap-1 pb-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1 text-gray-600"
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block border-b py-3 ${
                  isItemActive(pathname, item) ? "font-semibold" : "text-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white"
            onClick={closeMobileMenu}
          >
            상담신청
          </Link>
        </nav>
      )}
    </header>
  );
}
