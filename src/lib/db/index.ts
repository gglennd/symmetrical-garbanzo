import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from "./schema"
import env from '../env';

const client = postgres(env.DATABASE_URL)
export default drizzle({ client, schema, casing: "snake_case" });