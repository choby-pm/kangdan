import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "노동위원회 대응 | 노동법률사무소 강단",
  description:
    "노동위원회 심문·조정 절차 대응이 필요하다면 노동법률사무소 강단의 전문적인 대리인 조력을 받으세요.",
  keywords: ["노동위원회", "노동위원회 대응", "부당해고 구제신청", "조정"],
};

export default function LaborCommitteePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">노동위원회 대응</h1>
    </div>
  );
}
