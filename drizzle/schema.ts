import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, datetime, text } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const events = mysqlTable("events", {
	eventId: int("event_id").autoincrement().notNull(),
	eventName: varchar("event_name", { length: 255 }).notNull(),
	organizerWalletAddress: varchar("organizer_wallet_address", { length: 255 }).notNull(),
	startDatetime: datetime("start_datetime", { mode: 'string'}).notNull(),
	location: varchar("location", { length: 255 }),
	description: text("description"),
},
(table) => {
	return {
		eventsEventId: primaryKey(table.eventId),
	}
});