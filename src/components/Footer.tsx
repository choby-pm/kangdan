import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-stretch">
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="text-xl font-bold">노동법률사무소 강단</p>
            <p className="mt-3 text-sm text-gray-300">
              대표 : 최규민 | 사업자등록번호: 123-45-67890
            </p>
            <p className="mt-1 text-sm text-gray-300">
              주소 : 서울특별시 송파구 올림픽로32길 22-23 평원빌딩 205호
            </p>

            <div className="mt-4 flex justify-center gap-2 md:justify-start">
              <Link
                href="/location"
                className="rounded-full border border-gray-700 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-900"
              >
                오시는 길
              </Link>
              <Link
                href="/privacy"
                className="rounded-full border border-gray-700 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-900"
              >
                개인정보처리방침
              </Link>
            </div>
          </div>

          <Image
            src="/images/whitecolumn.png"
            alt="노동법률사무소 강단"
            width={573}
            height={279}
            className="order-1 h-full w-auto md:order-2"
          />
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          © 2026 노동법률사무소 강단. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
