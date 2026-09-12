import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "부당해고·부당징계 | 노동법률사무소 강단",
  description:
    "부당하게 해고·징계당한 근로자를 위한 부당해고 구제신청, 노동위원회 대응을 노동법률사무소 강단이 지원합니다.",
  keywords: ["부당해고", "부당징계", "해고 구제신청", "노동위원회"],
};

const service = getServiceBySlug("unfair-dismissal")!;

export default function UnfairDismissalPage() {
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
