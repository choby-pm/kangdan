import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "직장 내 괴롭힘·성희롱 | 노동법률사무소 강단",
  description:
    "직장 내 괴롭힘·성희롱 피해를 겪고 있다면 노동법률사무소 강단이 신고, 조사, 대응 전 과정을 함께합니다.",
  keywords: ["직장 내 괴롭힘", "직장 내 성희롱", "괴롭힘 신고", "고용노동부 진정"],
};

const FAQ_ITEMS = [
  {
    question: "신고하면 회사에서 불이익을 줄까 봐 걱정됩니다.",
    answer:
      "법적으로 신고자에 대한 불이익 조치는 금지되어 있으며, 불이익이 발생할 경우 별도로 강력하게 대응할 수 있습니다.",
  },
  {
    question: "증거가 명확하지 않아도 신고할 수 있나요?",
    answer:
      "정황 증거나 진술만으로도 조사가 개시될 수 있으며, 증거 수집 방법에 대해서도 함께 안내해 드립니다.",
  },
  {
    question: "사내 신고와 고용노동부 신고 중 무엇이 나을까요?",
    answer:
      "상황에 따라 유리한 절차가 다르므로, 상담을 통해 가장 효과적인 대응 순서를 정하는 것이 좋습니다.",
  },
];

export default function WorkplaceHarassmentPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">직장 내 괴롭힘·성희롱</h1>

      <section className="mx-auto mt-12 max-w-2xl">
        <h2 className="text-lg font-bold text-slate-900">자주 묻는 질문</h2>
        <div className="mt-4">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
