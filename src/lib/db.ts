import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "leads.db");

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

let db: Database.Database;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        business_type TEXT,
        message TEXT,
        status TEXT DEFAULT 'new',
        created_at TEXT DEFAULT (datetime('now', 'localtime'))
      )
    `);
  }
  return db;
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

export function insertLead(data: Omit<Lead, "id" | "status" | "created_at">) {
  const db = getDb();
  const stmt = db.prepare(
    `INSERT INTO leads (name, phone, email, business_type, message) VALUES (?, ?, ?, ?, ?)`
  );
  return stmt.run(
    data.name,
    data.phone,
    data.email ?? null,
    data.business_type ?? null,
    data.message ?? null
  );
}

export function getAllLeads(): Lead[] {
  const db = getDb();
  return db
    .prepare(`SELECT * FROM leads ORDER BY created_at DESC`)
    .all() as Lead[];
}

export function updateLeadStatus(id: number, status: Lead["status"]) {
  const db = getDb();
  return db
    .prepare(`UPDATE leads SET status = ? WHERE id = ?`)
    .run(status, id);
}
