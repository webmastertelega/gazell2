import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const CONFIG_PATH = join(process.cwd(), "src/data/config.json");

function readConfig() {
  return JSON.parse(readFileSync(CONFIG_PATH, "utf-8"));
}

export async function GET() {
  try {
    const config = readConfig();
    return NextResponse.json(config);
  } catch {
    return NextResponse.json({ error: "Failed to read config" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_token")?.value;
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    writeFileSync(CONFIG_PATH, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to save config" }, { status: 500 });
  }
}
