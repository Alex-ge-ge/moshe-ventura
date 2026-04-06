import { NextRequest, NextResponse } from "next/server";
import { updateLeadStatus, Lead } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "לא מורשה" }, { status: 401 });
  }

  const { id, status } = await req.json();
  if (!id || !status) {
    return NextResponse.json({ error: "חסרים פרמטרים" }, { status: 400 });
  }

  await updateLeadStatus(Number(id), status as Lead["status"]);
  return NextResponse.json({ success: true });
}
