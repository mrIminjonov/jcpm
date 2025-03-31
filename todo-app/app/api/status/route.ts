import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"

export async function GET() {
  // Check if the required environment variables exist
  const hasRequiredEnvVars = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN

  if (!hasRequiredEnvVars) {
    return NextResponse.json({
      status: "disconnected",
      demoMode: true,
    })
  }

  try {
    // Only try to connect if we have the env vars
    await kv.ping()

    return NextResponse.json({
      status: "connected",
      demoMode: false,
    })
  } catch (error) {
    return NextResponse.json({
      status: "disconnected",
      demoMode: true,
    })
  }
}

