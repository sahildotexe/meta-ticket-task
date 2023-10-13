import { connect } from '@planetscale/database'
import { config } from '@/db/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { events } from '@/db/schema'


export default async function postNewEvent(eventName: string, organizerWalletAddress: string, startDatetime: string, location: string, description: string): Promise<any> {
    const conn = connect(config)
    const db = drizzle(conn)
    const newEvent: any = await db.insert(events).values({
        eventName,
        organizerWalletAddress,
        startDatetime,
        location,
        description
    })
    return newEvent

}