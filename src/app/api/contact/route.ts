import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "ckmcpla@naver.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, category, subject, message } = body as Record<string, string>;

  if (!name || !phone || !email) {
    return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "이메일 발송이 설정되어 있지 않습니다." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "노동법률사무소 강단 웹사이트 <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[상담신청] ${subject || "제목 없음"}`,
      text: [
        `이름: ${name}`,
        `전화번호: ${phone}`,
        `이메일: ${email}`,
        `상담분야: ${category || "미선택"}`,
        "",
        "문의사항:",
        message || "-",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "이메일 전송에 실패했습니다." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "이메일 전송에 실패했습니다." }, { status: 500 });
  }
}
