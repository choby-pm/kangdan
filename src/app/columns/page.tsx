import Link from "next/link";
import { getAllColumns } from "@/lib/columns";

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
