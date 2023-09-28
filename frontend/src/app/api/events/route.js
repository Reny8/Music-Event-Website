import { NextResponse } from "next/server";
const { events } = require("../data.json");

export async function GET() {
  const data = NextResponse.json(events);
  return data;
}
