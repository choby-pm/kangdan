import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "임금체불·퇴직금 | 노동법률사무소 강단",
  description:
    "밀린 임금과 퇴직금을 받지 못했다면 노동법률사무소 강단과 함께 임금체불 진정, 소송을 통해 끝까지 받아내세요.",
  keywords: ["임금체불", "퇴직금", "체불임금 진정", "체당금"],
};

const FAQ_ITEMS = [
  {
    question: "퇴사 후 며칠 안에 임금을 받아야 하나요?",
    answer:
      "근로기준법상 퇴직일로부터 14일 이내에 임금과 퇴직금을 지급해야 하며, 미지급 시 지연이자가 발생할 수 있습니다.",
  },
  {
    question: "회사가 폐업해서 사장님과 연락이 안 되는데 방법이 있나요?",
    answer:
      "이런 경우 국가가 대신 지급하는 체당금(대지급금) 제도를 활용할 수 있어 관련 절차를 안내해 드립니다.",
  },
  {
    question: "퇴직금은 얼마를 받을 수 있는지 계산이 어렵습니다.",
    answer:
      "평균임금과 근속연수를 기준으로 정확히 계산해 드리며, 상담을 통해 예상 수령액을 안내받으실 수 있습니다.",
  },
];

export default function WageDisputePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">임금체불·퇴직금</h1>

      <section className="mx-auto mt-12 max-w-2xl">
        <h2 className="text-lg font-bold text-slate-900">자주 묻는 질문</h2>
        <div className="mt-4">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
