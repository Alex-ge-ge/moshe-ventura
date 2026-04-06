import { neon } from "@neondatabase/serverless";

function getSql() {
  return neon(process.env.DATABASE_URL!);
}

export type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  business_type: string | null;
  message: string | null;
  status: "new" | "in_progress" | "done";
  created_at: string;
};

export async function insertLead(
  data: Omit<Lead, "id" | "status" | "created_at">
) {
  const sql = getSql();
  await sql`
    INSERT INTO leads (name, phone, email, business_type, message)
    VALUES (${data.name}, ${data.phone}, ${data.email ?? null}, ${data.business_type ?? null}, ${data.message ?? null})
  `;
}

export async function getAllLeads(): Promise<Lead[]> {
  const sql = getSql();
  const rows = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
  return rows as Lead[];
}

export async function updateLeadStatus(id: number, status: Lead["status"]) {
  const sql = getSql();
  await sql`UPDATE leads SET status = ${status} WHERE id = ${id}`;
}

export async function deleteLead(id: number) {
  const sql = getSql();
  await sql`DELETE FROM leads WHERE id = ${id}`;
}
