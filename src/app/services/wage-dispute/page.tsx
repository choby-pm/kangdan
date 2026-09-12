import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "임금체불·퇴직금 | 노동법률사무소 강단",
  description:
    "밀린 임금과 퇴직금을 받지 못했다면 노동법률사무소 강단과 함께 임금체불 진정, 소송을 통해 끝까지 받아내세요.",
  keywords: ["임금체불", "퇴직금", "체불임금 진정", "체당금"],
};

const service = getServiceBySlug("wage-dispute")!;

export default function WageDisputePage() {
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
