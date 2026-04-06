import { NextResponse } from "next/server";
import { getAllLeads } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "לא מורשה" }, { status: 401 });
  }

  const leads = await getAllLeads();
  return NextResponse.json(leads);
}
