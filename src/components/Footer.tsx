import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black py-12 text-center text-white">
      <div className="mx-auto max-w-5xl px-6">
        <Image
          src="/images/whitecolumn.png"
          alt="노동법률사무소 강단"
          width={573}
          height={279}
          className="mx-auto h-16 w-auto"
        />

        <p className="mt-6 text-xs text-gray-500">
          © 2026 노동법률사무소 강단. All rights reserved.
        </p>
        <p className="mt-3 text-xs text-gray-300">
          서울특별시 송파구 올림픽로32길 22-23 평원빌딩 205호
        </p>
        <p className="mt-1 text-xs text-gray-300">
          사업자등록번호 123-45-67890 | 전화(사무실) 070-4142-0501
        </p>
        <p className="mt-1 text-xs text-gray-300">
          대표 최규민 | 전화(휴대폰) 010-4488-6131
        </p>

        <div className="mt-6 flex justify-center gap-4 text-xs text-gray-500">
          <Link href="/location" className="hover:text-white">
            오시는 길
          </Link>
          <Link href="/privacy" className="hover:text-white">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
