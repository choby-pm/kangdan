import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "노동위원회 대응 | 노동법률사무소 강단",
  description:
    "노동위원회 심문·조정 절차 대응이 필요하다면 노동법률사무소 강단의 전문적인 대리인 조력을 받으세요.",
  keywords: ["노동위원회", "노동위원회 대응", "부당해고 구제신청", "조정"],
};

const service = getServiceBySlug("labor-committee")!;

export default function LaborCommitteePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{service.title}</h1>
      <p className="mt-4 max-w-2xl text-gray-600">{service.description}</p>

      <section id="faq" className="mx-auto mt-12 max-w-2xl scroll-mt-24">
        <h2 className="text-lg font-bold text-black">자주 묻는 질문</h2>
        <div className="mt-4">
          <FaqAccordion items={service.faq} />
        </div>
      </section>
    </div>
  );
}
