import fs from "fs";
import path from "path";
import matter from "gray-matter";

const COLUMNS_DIR = path.join(process.cwd(), "content", "columns");

export type ColumnFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
};

export type ColumnSummary = ColumnFrontmatter & { slug: string };

export type Column = ColumnSummary & { content: string };

export function getAllColumns(): ColumnSummary[] {
  const files = fs.readdirSync(COLUMNS_DIR).filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(COLUMNS_DIR, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as ColumnFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getColumnBySlug(slug: string): Column | null {
  const filePath = path.join(COLUMNS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, content, ...(data as ColumnFrontmatter) };
}
