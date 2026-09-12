import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길 | 노동법률사무소 강단",
  description: "노동법률사무소 강단의 위치와 오시는 방법을 안내합니다.",
  keywords: ["노동법률사무소 강단 위치", "오시는 길", "찾아오시는 길"],
};

export default function LocationPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold">오시는 길</h1>

        <div className="mt-8 grid overflow-hidden rounded-lg border border-gray-200 md:grid-cols-2">
          <div className="flex min-h-[280px] flex-col items-center justify-center bg-gray-100 text-sm text-gray-400">
            <span>지도 (mock · 실제 지도 API 키로 교체 예정)</span>
            <span className="mt-1">위도 37.5063 · 경도 127.1108</span>
          </div>
          <div className="bg-black p-8 text-white">
            <h2 className="text-xl font-bold">노동법률사무소 강단</h2>
            <div className="mt-4 space-y-1 text-sm text-gray-300">
              <p>서울특별시 송파구 올림픽로32길 22-23 평원빌딩 205호</p>
              <p>전화(휴대폰) 010-4488-6131</p>
              <p>전화(사무실) 070-4142-0501</p>
              <p>이메일 ckmcpla@naver.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-bold text-black">대중교통 안내</h2>
          <div className="mt-4 space-y-2 text-gray-600">
            <p>지하철: 2호선·8호선 잠실역 3번 출구에서 도보 10분</p>
            <p>버스: 302, 3313번 승차 후 &apos;평원빌딩&apos; 정류장 하차</p>
          </div>
        </div>
      </div>
    </div>
  );
}
