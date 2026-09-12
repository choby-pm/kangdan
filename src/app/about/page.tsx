import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대표노무사 소개 | 노동법률사무소 강단",
  description:
    "노동법률사무소 강단 대표노무사의 경력, 학력, 상담 철학을 소개합니다. 부당해고·임금체불 등 노동 문제를 함께 해결합니다.",
  keywords: ["공인노무사", "대표노무사", "노동법률사무소 강단", "노무사 소개"],
};

const CAREER_ITEMS = [
  "現) 노동법률사무소 강단 대표노무사",
  "前) ○○노무법인 노동분쟁팀장",
  "前) 서울지방노동위원회 권리구제 대리인 다수 수행",
  "부당해고·임금체불·직장 내 괴롭힘 사건 다수 해결",
];

const EDUCATION_ITEMS = ["○○대학교 법학과 졸업", "제○○회 공인노무사 시험 합격"];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-slate-950 px-6 py-16 text-center text-white md:py-24">
        <p className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
          &ldquo;가망없어 보이는 그 싸움, 캄캄한 어둠 속을 혼자 걷는 그 마음을
          <br className="hidden md:block" /> 너무나도 잘 알기에 노동법률사무소
          강단이 함께하겠습니다.&rdquo;
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="flex h-60 w-48 shrink-0 items-center justify-center rounded-md bg-gray-200 text-sm text-gray-400">
            프로필 사진
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">최규민 공인노무사</h1>

            <h2 className="mt-6 font-semibold text-slate-700">경력</h2>
            <ul className="mt-2 space-y-1 text-gray-600">
              {CAREER_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-6 font-semibold text-slate-700">학력</h2>
            <ul className="mt-2 space-y-1 text-gray-600">
              {EDUCATION_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-sm italic tracking-widest text-amber-600">
            about the name
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-900">
            &ldquo;강단(剛斷)&rdquo;이라는 이름의 의미
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            강단(剛斷)은 굳세고 꿋꿋하게 흔들리지 않는 의지를 뜻합니다. 아무리
            불리해 보이는 사건이라도, 곧은 자세로 끝까지 의뢰인의 편에 서서
            싸우겠다는 다짐을 담아 사무소의 이름을 지었습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
