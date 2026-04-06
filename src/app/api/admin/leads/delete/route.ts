import { NextRequest, NextResponse } from "next/server";
import { deleteLead } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "לא מורשה" }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: "חסר מזהה" }, { status: 400 });
  }

  await deleteLead(Number(id));
  return NextResponse.json({ success: true });
}
