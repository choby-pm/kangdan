import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t p-4 text-sm">
      <Link href="/privacy">개인정보처리방침</Link>
    </footer>
  );
}
