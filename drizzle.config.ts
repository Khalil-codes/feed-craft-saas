import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  migrations: {
    table: "__feed-craft-drizzle-migrations",
    prefix: "supabase",
    schema: "drizzle",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://postgres@localhost:5432",
  },
});
