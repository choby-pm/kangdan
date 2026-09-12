import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "산업재해 | 노동법률사무소 강단",
  description:
    "업무 중 다치거나 병을 얻었다면 산업재해 승인부터 보상까지 노동법률사무소 강단이 함께합니다.",
  keywords: ["산업재해", "산재보상", "산재 승인", "근로복지공단"],
};

const FAQ_ITEMS = [
  {
    question: "산재 승인까지 얼마나 걸리나요?",
    answer:
      "사안에 따라 다르지만 통상 1~3개월 정도 소요되며, 복잡한 사안은 더 걸릴 수 있어 초기 대응이 중요합니다.",
  },
  {
    question: "회사가 산재 처리를 꺼려하는데 어떻게 하나요?",
    answer:
      "산재 신청은 근로자가 직접 할 수 있는 권리이며, 회사 동의 없이도 진행할 수 있도록 도와드립니다.",
  },
  {
    question: "산재로 인정되면 어떤 보상을 받을 수 있나요?",
    answer:
      "치료비, 휴업급여, 장해급여 등 상황에 맞는 보상 항목을 함께 확인하고 청구를 지원해 드립니다.",
  },
];

export default function IndustrialAccidentPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">산업재해</h1>

      <section className="mx-auto mt-12 max-w-2xl">
        <h2 className="text-lg font-bold text-slate-900">자주 묻는 질문</h2>
        <div className="mt-4">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
