import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

const CONFIG_PATH = join(process.cwd(), "src/data/config.json");
const UPLOAD_DIR = join(process.cwd(), "public/uploads");

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_token")?.value;
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const field = formData.get("field") as string; // "photo1" | "photo2" | "photo3" | "photo4"

    if (!file || !field) {
      return NextResponse.json({ error: "Missing file or field" }, { status: 400 });
    }

    const ext = file.name.split(".").pop();
    const filename = `vehicle_${field}_${Date.now()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    // ensure uploads dir exists
    const { mkdirSync, existsSync } = await import("fs");
    if (!existsSync(UPLOAD_DIR)) mkdirSync(UPLOAD_DIR, { recursive: true });

    writeFileSync(join(UPLOAD_DIR, filename), buffer);

    // update config only for named slots (not gallery — handled client-side)
    if (!field.startsWith("gallery_")) {
      const config = JSON.parse(readFileSync(CONFIG_PATH, "utf-8"));
      config.vehicle[field] = `/uploads/${filename}`;
      writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
    }

    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
