"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

const PAGE_SIZE = 5;

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const pageItems = items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  function goToPage(nextPage: number) {
    setPage(nextPage);
    setOpenIndex(null);
  }

  return (
    <div>
      <div className="min-h-[290px] divide-y divide-gray-200 border-y">
        {pageItems.map((item, indexOnPage) => {
          const index = page * PAGE_SIZE + indexOnPage;
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

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(Math.max(0, page - 1))}
            disabled={page === 0}
            aria-label="이전 페이지"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ‹
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToPage(i)}
              aria-current={i === page}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                i === page ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            aria-label="다음 페이지"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
