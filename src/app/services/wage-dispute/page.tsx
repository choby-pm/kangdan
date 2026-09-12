import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "임금체불·퇴직금 | 노동법률사무소 강단",
  description:
    "밀린 임금과 퇴직금을 받지 못했다면 노동법률사무소 강단과 함께 임금체불 진정, 소송을 통해 끝까지 받아내세요.",
  keywords: ["임금체불", "퇴직금", "체불임금 진정", "체당금"],
};

export default function WageDisputePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">임금체불·퇴직금</h1>
    </div>
  );
}
