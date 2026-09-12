import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "부당해고·부당징계 | 노동법률사무소 강단",
  description:
    "부당하게 해고·징계당한 근로자를 위한 부당해고 구제신청, 노동위원회 대응을 노동법률사무소 강단이 지원합니다.",
  keywords: ["부당해고", "부당징계", "해고 구제신청", "노동위원회"],
};

export default function UnfairDismissalPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">부당해고·부당징계</h1>
    </div>
  );
}
