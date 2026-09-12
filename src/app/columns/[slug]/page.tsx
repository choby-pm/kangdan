import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getColumnBySlug } from "@/lib/columns";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const column = getColumnBySlug(slug);

  if (!column) return {};

  return {
    title: `${column.title} | 노동법률사무소 강단 칼럼`,
    description: column.excerpt,
  };
}

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const column = getColumnBySlug(slug);

  if (!column) notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{column.title}</h1>
      <div className="mt-4 prose">
        <MDXRemote source={column.content} />
      </div>
    </div>
  );
}
