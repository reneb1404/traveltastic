import { date, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp("created_at", { withTimezone: true })
	.notNull()
	.defaultNow();
const updatedAt = timestamp("updated_at", { withTimezone: true })
	.notNull()
	.defaultNow()
	.$onUpdate(() => new Date());

export const authUsers = pgTable("auth_users", {
	id: uuid("id").primaryKey().notNull(),
	email: text("email").notNull(),
	createdAt,
});

export const profilesTable = pgTable("profiles", {
	id: uuid("id")
		.primaryKey()
		.notNull()
		.references(() => authUsers.id, { onDelete: "cascade" }),
	full_name: text("full_name"),
	username: text("username"),
	email: text("email").notNull(),
	updatedAt,
});

export const tripsTable = pgTable("trips", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.notNull()
		.references(() => profilesTable.id, { onDelete: "cascade" }),
	tripName: text("trip_name").notNull(),
	destination: text("destination").notNull(),
	startDate: date("start_date").notNull(),
	endDate: date("end_date").notNull(),
	createdAt,
});
