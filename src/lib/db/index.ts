import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import env from "../env";
import * as schema from "./schema";

const client = postgres(env.DATABASE_URL);
export default drizzle({ client, schema, casing: "snake_case" });
