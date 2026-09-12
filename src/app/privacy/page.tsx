import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 노동법률사무소 강단",
  description: "노동법률사무소 강단의 개인정보처리방침을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold">개인정보처리방침</h1>
      </div>
    </div>
  );
}
