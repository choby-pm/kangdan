import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자주 묻는 질문 | 노동법률사무소 강단",
  description:
    "부당해고, 임금체불, 상담 절차 등 노동법률사무소 강단에 자주 문의하시는 질문과 답변을 안내합니다.",
  keywords: ["노동법 FAQ", "노무 상담 FAQ", "노동법률사무소 강단"],
};

export default function FaqPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">자주 묻는 질문</h1>
    </div>
  );
}
