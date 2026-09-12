import type { Metadata } from "next";
import CasesList from "@/components/CasesList";

export const metadata: Metadata = {
  title: "해결사례 | 노동법률사무소 강단",
  description:
    "부당해고, 임금체불, 직장 내 괴롭힘, 산업재해 등 노동법률사무소 강단이 해결한 사례를 소개합니다.",
  keywords: ["노동 사건 해결사례", "부당해고 사례", "임금체불 사례", "산재 사례"],
};

export default function CasesPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold">해결사례</h1>
        <div className="mt-8">
          <CasesList />
        </div>
      </div>
    </div>
  );
}
