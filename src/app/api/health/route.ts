import { NextResponse } from "next/server";
import { getMailHealth } from "@/lib/mail";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(getMailHealth());
}
