import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "산업재해 | 노동법률사무소 강단",
  description:
    "업무 중 다치거나 병을 얻었다면 산업재해 승인부터 보상까지 노동법률사무소 강단이 함께합니다.",
  keywords: ["산업재해", "산재보상", "산재 승인", "근로복지공단"],
};

export default function IndustrialAccidentPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">산업재해</h1>
    </div>
  );
}
