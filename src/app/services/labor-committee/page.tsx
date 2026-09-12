import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "노동위원회 대응 | 노동법률사무소 강단",
  description:
    "노동위원회 심문·조정 절차 대응이 필요하다면 노동법률사무소 강단의 전문적인 대리인 조력을 받으세요.",
  keywords: ["노동위원회", "노동위원회 대응", "부당해고 구제신청", "조정"],
};

const FAQ_ITEMS = [
  {
    question: "노동위원회 심문회의에 혼자 나가도 되나요?",
    answer:
      "혼자 대응하실 수도 있지만, 법률적 주장을 효과적으로 준비하기 위해 대리인과 함께 준비하시는 것이 유리합니다.",
  },
  {
    question: "노동위원회에서 패소하면 더 이상 방법이 없나요?",
    answer: "중앙노동위원회 재심 신청이나 행정소송 등 추가로 진행할 수 있는 절차가 있습니다.",
  },
  {
    question: "회사 측에서 노동위원회 대응을 요청받았는데 도움 받을 수 있나요?",
    answer: "네, 사용자 측 대리도 가능하며 상황에 맞는 대응 전략을 제시해 드립니다.",
  },
];

export default function LaborCommitteePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">노동위원회 대응</h1>

      <section className="mx-auto mt-12 max-w-2xl">
        <h2 className="text-lg font-bold text-black">자주 묻는 질문</h2>
        <div className="mt-4">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
