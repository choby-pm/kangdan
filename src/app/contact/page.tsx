import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담신청 | 노동법률사무소 강단",
  description:
    "부당해고, 임금체불, 직장 내 괴롭힘 등 노동 문제로 어려움을 겪고 계시다면 노동법률사무소 강단에 지금 무료 상담을 신청하세요.",
  keywords: ["노동 상담 신청", "노무사 상담", "노동법률사무소 강단 상담"],
};

export default function ContactPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">상담신청</h1>
    </div>
  );
}
