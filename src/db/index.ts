import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const connectionString =
  process.env.DATABASE_URL || "postgresql://postgres@localhost:5432";

export const db = drizzle(postgres(connectionString, { prepare: false }), {
  schema,
});
