import { NextResponse } from "next/server";
const {events} = require('../data.json')

export function GET() {
    const data = NextResponse.json(events)
    return data
}