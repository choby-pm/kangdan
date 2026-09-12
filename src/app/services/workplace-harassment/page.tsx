import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "직장 내 괴롭힘·성희롱 | 노동법률사무소 강단",
  description:
    "직장 내 괴롭힘·성희롱 피해를 겪고 있다면 노동법률사무소 강단이 신고, 조사, 대응 전 과정을 함께합니다.",
  keywords: ["직장 내 괴롭힘", "직장 내 성희롱", "괴롭힘 신고", "고용노동부 진정"],
};

export default function WorkplaceHarassmentPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">직장 내 괴롭힘·성희롱</h1>
    </div>
  );
}
