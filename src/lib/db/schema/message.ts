import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const message = pgTable("message", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  messge: text().notNull(),
});
