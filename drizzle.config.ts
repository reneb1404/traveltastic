import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./src/drizzle/migrations",
	dialect: "postgresql",
	strict: true,
	verbose: true,
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});