"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 border-y">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold text-black"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>Q. {item.question}</span>
              <span aria-hidden>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="pb-4 text-sm text-gray-600">A. {item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
