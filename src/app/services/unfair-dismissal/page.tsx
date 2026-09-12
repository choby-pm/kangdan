import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "부당해고·부당징계 | 노동법률사무소 강단",
  description:
    "부당하게 해고·징계당한 근로자를 위한 부당해고 구제신청, 노동위원회 대응을 노동법률사무소 강단이 지원합니다.",
  keywords: ["부당해고", "부당징계", "해고 구제신청", "노동위원회"],
};

const FAQ_ITEMS = [
  {
    question: "해고 통보를 구두로만 받았는데 부당해고로 다툴 수 있나요?",
    answer:
      "근로기준법상 해고는 서면으로 통지해야 효력이 있으므로, 구두 통보만 받으셨다면 그 자체로 부당해고에 해당할 가능성이 높습니다.",
  },
  {
    question: "부당해고 구제신청은 언제까지 해야 하나요?",
    answer:
      "해고일로부터 3개월 이내에 노동위원회에 구제신청을 해야 하므로 가능한 빨리 상담받으시는 것이 좋습니다.",
  },
  {
    question: "회사가 5인 미만 사업장인데도 구제받을 수 있나요?",
    answer:
      "5인 미만 사업장은 부당해고 구제신청 대상에서 제외될 수 있으나, 사안에 따라 다른 방법으로 권리를 구제받을 수 있어 상담이 필요합니다.",
  },
];

export default function UnfairDismissalPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">부당해고·부당징계</h1>

      <section className="mx-auto mt-12 max-w-2xl">
        <h2 className="text-lg font-bold text-slate-900">자주 묻는 질문</h2>
        <div className="mt-4">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
