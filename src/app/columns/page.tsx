import type { Metadata } from "next";
import Link from "next/link";
import { getAllColumns } from "@/lib/columns";

export const metadata: Metadata = {
  title: "칼럼 | 노동법률사무소 강단",
  description:
    "부당해고, 임금체불, 직장 내 괴롭힘 등 노동 문제에 대한 노동법률사무소 강단의 칼럼을 확인하세요.",
  keywords: ["노동법 칼럼", "노무 칼럼", "노동법률사무소 강단"],
};

export default function ColumnsPage() {
  const columns = getAllColumns();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">칼럼</h1>
      <ul className="mt-4 space-y-4">
        {columns.map((column) => (
          <li key={column.slug}>
            <Link href={`/columns/${column.slug}`} className="font-semibold">
              {column.title}
            </Link>
            <p className="text-sm text-gray-500">{column.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
