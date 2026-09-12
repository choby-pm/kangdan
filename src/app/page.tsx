import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import HeroVideo from "@/components/HeroVideo";
import ServicesTabs from "@/components/ServicesTabs";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "노동법률사무소 강단 | 부당해고·임금체불 전문 공인노무사",
  description:
    "부당해고, 임금체불, 직장 내 괴롭힘, 산업재해 등 노동 문제를 전문적으로 해결하는 노동법률사무소 강단입니다. 지금 무료 상담을 신청하세요.",
  keywords: [
    "노동법률사무소",
    "공인노무사",
    "부당해고",
    "임금체불",
    "직장 내 괴롭힘",
    "산업재해",
    "노동위원회",
  ],
};

const TRUST_STATS = [
  { icon: "⚖️", value: "10년+", label: "노동 사건 실무 경력" },
  { icon: "🤝", value: "500+", label: "누적 상담 사례" },
  { icon: "🎓", value: "공인노무사", label: "국가 공인 자격 보유" },
  { icon: "🏛️", value: "다수", label: "노동위원회 대응 경험" },
];

const CORE_SERVICES = SERVICES.slice(0, 4);

const CASE_PREVIEWS = [
  {
    title: "부당해고 구제 신청 인용 사례",
    summary: "부당해고 판정을 받아 원직복직과 미지급 임금 전액을 지급받은 사례입니다.",
  },
  {
    title: "임금체불 대지급금 지원 사례",
    summary: "체불된 임금을 대지급금 제도를 통해 신속하게 받을 수 있도록 지원한 사례입니다.",
  },
  {
    title: "직장 내 괴롭힘 신고 및 조치 사례",
    summary: "직장 내 괴롭힘을 신고하고 가해자 징계와 근무환경 개선을 이끌어낸 사례입니다.",
  },
];

const PROCESS_STEPS = [
  { icon: "📞", title: "① 상담 신청", desc: "전화 또는 온라인으로 편하게 상담을 신청하세요." },
  { icon: "🔍", title: "② 초기 진단", desc: "노무사가 사건 내용을 꼼꼼히 검토해 드립니다." },
  {
    icon: "🧭",
    title: "③ 해결 방향 제시",
    desc: "상황에 맞는 가장 효과적인 해결 전략을 제시합니다.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative flex min-h-[70dvh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-white sm:px-12">
        <HeroVideo src="/videos/hero2.mp4" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Image
            src="/images/whitecolumn.png"
            alt="노동법률사무소 강단"
            width={573}
            height={279}
            className="mx-auto h-20 w-auto md:h-28"
            priority
          />
          <p className="mt-8 text-sm leading-relaxed md:text-lg">
            가망없어 보이는 싸움, 어둠 속을 홀로 걷는 그 마음을 잘 알기에
          </p>
          <p className="mt-2 text-lg font-bold leading-relaxed md:text-2xl">
            노동법률사무소 강단이 함께하겠습니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-gray-200"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>

      <FadeIn>
        <section className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-16 md:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
                {stat.icon}
              </div>
              <p className="mt-3 text-xl font-bold text-black">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-black">업무분야</h2>
            <div className="mt-10">
              <ServicesTabs services={CORE_SERVICES} />
            </div>
            <div className="mt-10 text-center">
              <Link href="/services" className="font-semibold text-black underline hover:text-gray-600">
                전체 업무분야 보기 →
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="flex h-40 w-32 shrink-0 items-center justify-center rounded-md bg-gray-200 text-sm text-gray-400">
              프로필 사진
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">최규민 공인노무사</h2>
              <p className="mt-2 text-gray-600">
                굳은 의지로 끝까지 의뢰인의 편에 서는 노동법률사무소 강단의
                대표노무사입니다.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block font-semibold text-black underline hover:text-gray-600"
              >
                자세히 보기 →
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-black">해결사례</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {CASE_PREVIEWS.map((item) => (
                <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.summary}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/cases" className="font-semibold text-black underline hover:text-gray-600">
                더 많은 사례 보기 →
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-black">상담 절차 안내</h2>
          <p className="mt-2 text-sm text-gray-500">
            처음이라 낯설고 막막하셔도 괜찮습니다. 강단이 차근차근 함께합니다.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div key={step.title}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
                  {step.icon}
                </div>
                <h3 className="mt-4 font-semibold text-black">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-black px-6 py-20 text-center text-white">
          <p className="text-xl font-bold md:text-2xl">
            혼자 걷던 어둠 속, 이제 강단이 함께합니다
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-gray-200"
          >
            무료 상담 신청하기
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
