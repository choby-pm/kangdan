import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceSubNav from "@/components/ServiceSubNav";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "직장 내 괴롭힘·성희롱 | 노동법률사무소 강단",
  description:
    "직장 내 괴롭힘·성희롱 피해를 겪고 있다면 노동법률사무소 강단이 신고, 조사, 대응 전 과정을 함께합니다.",
  keywords: ["직장 내 괴롭힘", "직장 내 성희롱", "괴롭힘 신고", "고용노동부 진정"],
};

const service = getServiceBySlug("workplace-harassment")!;

export default function WorkplaceHarassmentPage() {
  return (
    <div>
      <ServiceSubNav currentSlug="workplace-harassment" />
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
    </div>
  );
}
