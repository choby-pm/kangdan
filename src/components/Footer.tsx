import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t p-4 text-sm">
      <div className="flex gap-4">
        <Link href="/faq">자주 묻는 질문</Link>
        <Link href="/privacy">개인정보처리방침</Link>
      </div>
    </footer>
  );
}
