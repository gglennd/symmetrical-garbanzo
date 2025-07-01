import { defineConfig } from "drizzle-kit";

import env from "@/lib/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  casing: "snake_case",
});
