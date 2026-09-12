"use client";

import { useState } from "react";
import { CASES, CASE_CATEGORIES } from "@/data/cases";

export default function CasesList() {
  const [filter, setFilter] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = filter ? CASES.filter((item) => item.category === filter) : CASES;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            filter === null
              ? "border-black bg-black text-white"
              : "border-gray-300 text-gray-600 hover:bg-gray-50"
          }`}
        >
          전체
        </button>
        {CASE_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              filter === category
                ? "border-black bg-black text-white"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="rounded-lg border border-gray-200 p-6">
              <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                {item.category}
              </span>
              <p className="mt-3 font-semibold text-black">{item.summary}</p>
              {isOpen && <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.detail}</p>}
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="mt-4 text-sm font-semibold text-black underline hover:text-gray-600"
              >
                {isOpen ? "접기 ↑" : "자세히 보기 →"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
