import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2">
        <div>
          <p className="text-lg font-bold text-white">노동법률사무소 강단</p>
          <p className="mt-2 text-sm">서울시 강남구 테헤란로 000, 00빌딩 0층 (mock)</p>
          <p className="text-sm">전화 000-0000-0000 (mock)</p>
          <p className="text-sm">이메일 contact@kangdan.example (mock)</p>
        </div>
        <div className="md:text-right">
          <p className="font-semibold text-white">바로가기</p>
          <ul className="mt-2 space-y-1 text-sm md:flex md:flex-col md:items-end">
            <li>
              <Link href="/location">오시는 길</Link>
            </li>
            <li>
              <Link href="/faq">자주 묻는 질문</Link>
            </li>
            <li>
              <Link href="/privacy">개인정보처리방침</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-500">
        © 2026 노동법률사무소 강단. All rights reserved.
      </div>
    </footer>
  );
}
