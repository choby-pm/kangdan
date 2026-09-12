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
    </div>
  );
}
