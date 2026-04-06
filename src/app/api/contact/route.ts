import { NextRequest, NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, business_type, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "שם וטלפון הם שדות חובה" },
        { status: 400 }
      );
    }

    insertLead({ name, phone, email, business_type, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "שגיאת שרת" }, { status: 500 });
  }
}
