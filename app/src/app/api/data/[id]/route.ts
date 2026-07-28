import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src", "libs", "data", "data.json");

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const file = fs.readFileSync(dataPath, "utf-8");
  const data = JSON.parse(file);
  const entry = data.find((d: { day: number }) => d.day === Number(id));

  if (!entry) {
    return NextResponse.json({ error: "Day not found" }, { status: 404 });
  }

  return NextResponse.json(entry);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { details } = await req.json();

  const file = fs.readFileSync(dataPath, "utf-8");
  const data = JSON.parse(file);

  const entry = data.find((d: { day: number }) => d.day === Number(id));
  if (entry) {
    entry.details = details;
  } else {
    data.push({ day: Number(id), details });
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 4), "utf-8");
  return NextResponse.json(entry ?? { day: Number(id), details });
}
