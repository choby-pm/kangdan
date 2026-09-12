import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceSubNav from "@/components/ServiceSubNav";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "산업재해 | 노동법률사무소 강단",
  description:
    "업무 중 다치거나 병을 얻었다면 산업재해 승인부터 보상까지 노동법률사무소 강단이 함께합니다.",
  keywords: ["산업재해", "산재보상", "산재 승인", "근로복지공단"],
};

const service = getServiceBySlug("industrial-accident")!;

export default function IndustrialAccidentPage() {
  return (
    <div>
      <ServiceSubNav currentSlug="industrial-accident" />
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
