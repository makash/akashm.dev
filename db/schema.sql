-- akashm.dev D1 Schema
-- Run: wrangler d1 execute akashm-dev-db --file=./db/schema.sql

CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT DEFAULT '/',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  ip_country TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
