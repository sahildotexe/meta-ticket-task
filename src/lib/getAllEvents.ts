import { connect } from '@planetscale/database'
import { config } from '@/db/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { events } from '@/db/schema'

export default async function getAllEvents(): Promise<CustomMyEvent[]> {
    const conn = connect(config)
    const db = drizzle(conn)
    const results: CustomMyEvent[]= await db.select().from(events)
    return results
}