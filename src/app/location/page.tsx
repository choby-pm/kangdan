import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길 | 노동법률사무소 강단",
  description: "노동법률사무소 강단의 위치와 오시는 방법을 안내합니다.",
  keywords: ["노동법률사무소 강단 위치", "오시는 길", "찾아오시는 길"],
};

export default function LocationPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">오시는 길</h1>
      <div className="mt-6 space-y-2 text-gray-600">
        <p>서울특별시 송파구 올림픽로32길 22-23 평원빌딩 205호</p>
        <p>전화(휴대폰) 010-4488-6131</p>
        <p>전화(사무실) 070-4142-0501</p>
        <p>이메일 ckmcpla@naver.com</p>
      </div>
    </div>
  );
}
