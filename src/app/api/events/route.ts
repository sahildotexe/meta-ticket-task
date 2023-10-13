import { NextResponse } from "next/server"
import getAllEvents from "@/lib/getAllEvents"
import postNewEvent from "@/lib/postNewEvent"

export async function GET(request: Request) {
    const events = await getAllEvents()
    return NextResponse.json(events)
}

export async function POST(request: Request) {
    const body = await request.json()
    const { eventName, organizerWalletAddress, startDatetime, location, description } = body
    const newEvent = await postNewEvent(eventName, organizerWalletAddress, startDatetime, location, description)
    return NextResponse.json(newEvent)
}