import { config } from "dotenv";
import { expand } from "dotenv-expand";
import path from "node:path";
import { z, ZodError, ZodObject, ZodRawShape } from "zod/v4";

expand(
  config({
    path: path.resolve(process.cwd(), ".env"),
  })
);

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DATABASE_URL: z.string(),
})

function tryParseEnv<T extends ZodRawShape>(
  schema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env
) {
  const result = schema.safeParse(buildEnv);

  if (!result.success) {
    if (result.error instanceof ZodError) {
      let message = "Missing or invalid values in .env: ";
      message += Object.keys(z.flattenError(result.error).fieldErrors)
      const err = new Error(message);
      err.stack = "";
      throw err;
    } else {
      console.error(result.error);
      throw result.error;
    }
  }

  return result.data;
}

export type Env = z.infer<typeof EnvSchema>;
const env: Env = tryParseEnv(EnvSchema)

export default env;
