"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("전송 실패");

      setSubmitted(true);
    } catch {
      setError("전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-gray-200 p-8 text-center">
        <p className="text-lg font-semibold text-black">상담 신청이 접수되었습니다.</p>
        <p className="mt-2 text-sm text-gray-600">
          빠른 시일 내에 이메일 또는 유선으로 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-black">
          이름 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-black">
          전화번호 <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="010-0000-0000"
          className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-black">
          이메일 <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-semibold text-black">
          상담분야
        </label>
        <select
          id="category"
          name="category"
          defaultValue=""
          className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
        >
          <option value="" disabled>
            선택해주세요
          </option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-black">
          제목
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-black">
          문의사항
        </label>
        <p className="mt-1 text-xs text-gray-500">
          궁금하신 사항을 남겨주시면 이메일 또는 유선으로 답변드리겠습니다.
        </p>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
        />
      </div>

      <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600">
        <p className="font-semibold text-gray-700">개인정보 수집 및 이용 동의</p>
        <p className="mt-2">
          수집 항목: 이름, 전화번호, 이메일, 상담분야, 문의내용
          <br />
          수집 목적: 법률상담 신청에 대한 답변 및 상담 진행
          <br />
          보유 기간: 상담 완료 후 1년까지 보관 후 파기
        </p>
        <label className="mt-3 flex items-center gap-2 font-semibold text-black">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          개인정보 수집 및 이용에 동의합니다. (필수)
        </label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={!agreed || submitting}
        className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {submitting ? "전송 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}
