import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { getAllLeads, Lead } from "@/lib/db";
import AdminDashboard from "@/components/AdminDashboard";

export default async function AdminPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const leads = await getAllLeads();

  return <AdminDashboard initialLeads={leads} />;
}
