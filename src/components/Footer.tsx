import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2">
        <div>
          <p className="text-lg font-bold text-white">노동법률사무소 강단</p>
          <p className="mt-2 text-sm">
            서울특별시 송파구 올림픽로32길 22-23 평원빌딩 205호
          </p>
          <p className="text-sm">전화(휴대폰) 010-4488-6131 · 전화(사무실) 070-4142-0501</p>
          <p className="text-sm">이메일 ckmcpla@naver.com</p>
        </div>
        <div className="md:text-right">
          <p className="font-semibold text-white">바로가기</p>
          <ul className="mt-2 space-y-1 text-sm md:flex md:flex-col md:items-end">
            <li>
              <Link href="/location">오시는 길</Link>
            </li>
            <li>
              <Link href="/privacy">개인정보처리방침</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 px-6 py-4 text-center text-xs text-gray-500">
        © 2026 노동법률사무소 강단. All rights reserved.
      </div>
    </footer>
  );
}
